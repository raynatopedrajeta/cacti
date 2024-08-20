import { v4 as uuidv4 } from "uuid";
import "jest-extended";
// import { DamlTestLedger } from "@hyperledger/cactus-test-tooling";
import { DamlTestLedger } from "@hyperledger/cactus-test-tooling";

// import {
//   PluginLedgerConnectorDAML
// } from "../../../../main/typescript/plugin-ledger-connector-daml";

import { PluginLedgerConnectorDAML } from "../../../main/typescript/plugin-ledger-connector-daml";
// import { PluginLedgerConnectorDAML } from "../../../main/typescript/plugin-ledger-connector-daml"

import { DefaultApi } from "../../../main/typescript/generated/openapi/typescript-axios/index"
// import {} from "../../../main/typescript/generated"
// ../../../../
// import { DefaultApi } from "../../../main/typescript/generated/openapi/typescript-axios/index";
// import {} from "../../../../../../m"

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
  // let plugin = PluginLedgerConnectorDAML;
  let apiClient: DefaultApi;
  const expressApp = express();
  const server = http.createServer(expressApp);
  // let testfiletry: TestFileTry();
  // const ttry = new TestFileTry()
  // const ttry = new TestFileTry();
  // console.log("PROCEEDD====================")


  beforeAll(async () => {
    const pruning = pruneDockerAllIfGithubAction({ logLevel });
    await damlTestLedger.start();
    expressApp.use(bodyParser.json({ limit: "250mb" }));
    // plugin = new PluginLedgerConnectorCorda({
    //   instanceId: uuidv4(),
    //   sshConfigAdminShell: sshConfig,
    //   corDappsDir: "",
    //   logLevel,
    //   cordaVersion: CordaVersion.CORDA_V5,
    //   apiUrl: "https://127.0.0.1:8888",
    // });

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
    // await plugin.registerWebServices(expressApp);
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
    // console.log("parties involved")
    // console.log(getPartiesInvolvedVar)
    // //get the token for Alice
    const getTokenForAlice: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Alice")
    console.log("THIS IS THE TOKEN FOR ALICE-----")
    console.log(getTokenForAlice)
    
    // create a function for jwt generator
    const getAliceToken: string = damlTestLedger.generateJwtToken(getTokenForAlice);
    console.log(getAliceToken)

    //get the sample IOU contract using Alice
    //replace this to apiclient. your opt id
    const url = "http://localhost:7575/v1/query"
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAliceToken}`,
      },
    });
    const responseBody = await response.json()
    console.log(responseBody.result[0].templateId)
    // wala na hanggang dito sa taas
    const getIouTemplate = responseBody.result[0].templateId

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

    const stringifyIOUPayload = JSON.stringify(createIou.data)
    const responseForIOUResult = JSON.parse(stringifyIOUPayload)

    let IOUtemplateId = responseForIOUResult.result.templateId
    let IOUcontractId = responseForIOUResult.result.contractId

    // /*==================
    //   STEP 2. Transfer IOU to BOB
    // ===================*/
    // const getHashForBob: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Bob")
    // const getBobToken: string = damlTestLedger.generateJwtToken(getHashForBob);
    // const transferToBobBody = {
    //   templateId: `${IOUtemplateId}`,
    //   contractId: `${IOUcontractId}`,
    //   choice: `Iou_Transfer`,
    //   argument: {
    //       newOwner: `${getHashForBob}`
    //   }
    // }
    // console.log("step 2 body-----")
    // console.log(transferToBobBody)
  
    // // console.log(transferToBobBody)
    // const transferUrl = "http://localhost:7575/v1/exercise"
    // const responseForTransfer = await fetch(transferUrl, {
    //   method: "POST",
    //   body: JSON.stringify(transferToBobBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getAliceToken}`,
    //   },
    // });
    // const responseForTransferBody = await responseForTransfer.json()
    // console.log("----transfer log")
    // console.log(responseForTransferBody)
    // console.log("step 2 result-----")
    // console.log(responseForTransferBody)

    // /*==================
    //   STEP 3. Accept Transfer of IOU as BOB
    // ===================*/
    // const queryAsBob = await damlTestLedger.queryViaParticipant(getBobToken)
    // console.log("query bob----")
    // console.log(queryAsBob)

    // let IOUTransfertemplateId = queryAsBob.result[1].templateId
    // let IOUTransfercontractId = queryAsBob.result[1].contractId

    // let acceptBody = {
    //   templateId: `${IOUTransfertemplateId}`,
    //   contractId: `${IOUTransfercontractId}`,
    //   choice: `IouTransfer_Accept`,
    //   argument: {
    //       newOwner: `${getBobToken}`
    //   }
    // }
    // console.log("step 3 body-----")
    // console.log(acceptBody)
    // const acceptUrl = "http://localhost:7575/v1/exercise"
    // const acceptTransfer = await fetch(acceptUrl, {
    //   method: "POST",
    //   body: JSON.stringify(acceptBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getBobToken}`,
    //   },
    // });
    // const acceptTransferBody = await acceptTransfer.json()
    // console.log("--------")
    // console.log(acceptTransferBody)
    // console.log("step 3 result----")
    // console.log(acceptTransferBody)

    // /*==================
    //   STEP 4. Check if transfer is successful by querying as BOB
    // ===================*/
    // let queryiou = await damlTestLedger.queryViaParticipant(getBobToken)
    // console.log("-------iou")
    // console.log(queryiou.result[1].templateId)
    // let queryIOUAsBobTemplateId = queryiou.result[1].templateId

    // let queryIouAsBobBody = {
    //   templateIds: [`${queryIOUAsBobTemplateId}`],
    //   query: {amount: 999.99},
    //   readers: [`${getHashForBob}`]
    // }
    // console.log("step 4 body-----")
    // console.log(queryIouAsBobBody)
    // const iouAsBobUrl = "http://localhost:7575/v1/query"
    // const queryIouAsBobRequest = await fetch(iouAsBobUrl, {
    //   method: "POST",
    //   body: JSON.stringify(queryIouAsBobBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getBobToken}`,
    //   },
    // });
    // const bobresponse = await queryIouAsBobRequest.json()
    // console.log("quey as bob response-----")
    // console.log(bobresponse)
    // console.log("step 4 result----")
    // console.log(bobresponse)

    })
  })
});