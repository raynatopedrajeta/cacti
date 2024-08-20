import { v4 as uuidv4 } from "uuid";
import "jest-extended";

import { DamlTestLedger } from "@hyperledger/cactus-test-tooling";

import { PluginLedgerConnectorDAML } from "../../../main/typescript/plugin-ledger-connector-daml";

import { DefaultApi } from "../../../main/typescript/generated/openapi/typescript-axios/index"

import test, { Test } from "tape-promise/tape";
import {
  IListenOptions,
  LogLevelDesc,
  Servers,
} from "@hyperledger/cactus-common";

import { pruneDockerAllIfGithubAction } from "../../../../../../packages/cactus-test-tooling/src/main/typescript/github-actions/prune-docker-all-if-github-action"
import fetch from "node-fetch";
import FormData from "form-data";
import https from "https";
import * as fs from 'fs';
import { Configuration } from "@hyperledger/cactus-core-api";
import http from "http";
import { AddressInfo } from "net";
import bodyParser from "body-parser";

import express from "express";

const testCase = "Instantiate plugin";
const logLevel: LogLevelDesc = "TRACE";

describe("PluginLedgerConnectorDAML", () => {
  const damlTestLedger = new DamlTestLedger();
  let apiClient: DefaultApi;
  const expressApp = express();
  const server = http.createServer(expressApp);

  beforeAll(async () => {
    const pruning = pruneDockerAllIfGithubAction({ logLevel });
    await damlTestLedger.start();
    expressApp.use(bodyParser.json({ limit: "250mb" }));

    let plugin = new PluginLedgerConnectorDAML({
      instanceId: uuidv4(),
      logLevel,
      apiUrl: "https://127.0.0.1:8888",
    });

    const listenOptions: IListenOptions = {
      hostname: "127.0.0.1",
      port: 0,
      server,
    };

    const addressInfo = (await Servers.listen(listenOptions)) as AddressInfo;
    const { address, port } = addressInfo;
    const apiHost = `http://${address}:${port}`;
    const config = new Configuration({ basePath: apiHost });

    await plugin.registerWebServices(expressApp);

    apiClient = new DefaultApi(config);
    
  });

  afterAll(async () => {
    await damlTestLedger.stop();
    await damlTestLedger.destroy();
  });

  describe("DAML SIMPLE IOU TRANSACTION", () => {
    it("DAML SIMPLE IOU TRANSACTION", async () => {
    // /*==================
    //   PREREQUISITES
    // ===================*/
    const getPartiesInvolvedVar: string = await damlTestLedger.getPartiesInvolved();

    const getTokenForAlice: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Alice")
    console.log("THIS IS THE TOKEN FOR ALICE-----")
    console.log(getTokenForAlice)
    
    // create a function for jwt generator
    const getAliceToken: string = damlTestLedger.generateJwtToken(getTokenForAlice);
    console.log(getAliceToken)

    const rawContractIOUBody = {
      participantToken: getAliceToken
    }

    //get the sample IOU contract using Alice
    const queryRawIou = await apiClient.queryRawContract(rawContractIOUBody)
    const rawStringifyIOUPayload = JSON.stringify(queryRawIou.data)
    const rawResponseForIOUResult = JSON.parse(rawStringifyIOUPayload)

    const getIouTemplate = rawResponseForIOUResult.result[0].templateId

    /*==================
      STEP 1. Create IOU
    ===================*/
    console.log("-----CREATE IOU-----")
    const iouBody = {
      templateId: `${getIouTemplate}`,
      payload: {
        issuer: `${getTokenForAlice}`,
        owner: `${getTokenForAlice}`,
        currency: "USD",
        amount: "999.99",
        observers: []
      }
    }
    const createIou = await apiClient.createIou(iouBody)

    let stringifyIOUPayload = JSON.stringify(createIou.data)
    let responseForIOUResult = JSON.parse(stringifyIOUPayload)

    let ioutemplateid = responseForIOUResult.result.templateId
    let ioucontractId = responseForIOUResult.result.contractId

    // /*==================
    //   STEP 2. Transfer IOU to BOB
    // ===================*/

    const getHashForBob: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Bob")
    const getBobToken: string = damlTestLedger.generateJwtToken(getHashForBob);

    const transferToBobBody = {
      participantToken: `${getAliceToken}`,
      templateId: `${ioutemplateid}`,
      contractId: `${ioucontractId}`,
      choice: `Iou_Transfer`,
      argument: {
          newOwner: `${getHashForBob}`
      }
    }

    let exerciseIou = await apiClient.exerciseChoice(transferToBobBody)

    console.log("This is the exercise-------")

    stringifyIOUPayload = JSON.stringify(exerciseIou.data)
    responseForIOUResult = JSON.parse(stringifyIOUPayload)
    let payloadResult = responseForIOUResult.result.events[1].created

    ioutemplateid = payloadResult.templateId
    ioucontractId = payloadResult.contractId

    // /*==================
    //   STEP 3. Accept Transfer of IOU as BOB
    // ===================*/

    let acceptBody = {
      participantToken: `${getBobToken}`,
      templateId: `${ioutemplateid}`,
      contractId: `${ioucontractId}`,
      choice: `IouTransfer_Accept`,
      argument: {
          newOwner: `${getBobToken}`
      }
    }
    exerciseIou = await apiClient.exerciseChoice(acceptBody)

    console.log("step 3 result----")

    stringifyIOUPayload = JSON.stringify(exerciseIou.data)
    responseForIOUResult = JSON.parse(stringifyIOUPayload)
    payloadResult = responseForIOUResult.result.events[1].created

    ioutemplateid = payloadResult.templateId
    ioucontractId = payloadResult.contractId
    

    console.log(responseForIOUResult)
    // /*==================
    //   STEP 4. Check if transfer is successful by querying as BOB
    // ===================*/

    let queryIouAsBobBody = {
      templateIds: [`${ioutemplateid}`],
      query: {amount: 999.99},
      readers: [`${getHashForBob}`],
      participantToken: getBobToken
    }

    const queryIou = await apiClient.queryContract(queryIouAsBobBody)
    stringifyIOUPayload = JSON.stringify(queryIou.data)
    responseForIOUResult = JSON.parse(stringifyIOUPayload)


    console.log("step 4 result----")
    console.log(responseForIOUResult)

    })
  })
});