import "jest-extended";
import { DamlTestLedger } from "@hyperledger/cactus-test-tooling";

import test, { Test } from "tape-promise/tape";
import { LogLevelDesc } from "@hyperledger/cactus-common";
import { pruneDockerAllIfGithubAction } from "../../../../../../packages/cactus-test-tooling/src/main/typescript/github-actions/prune-docker-all-if-github-action"
import fetch from "node-fetch";
import FormData from "form-data";
import https from "https";
import * as fs from 'fs';

const testCase = "Instantiate plugin";
const logLevel: LogLevelDesc = "TRACE";

describe("PluginLedgerConnectorDAML", () => {
  const damlTestLedger = new DamlTestLedger();

  beforeAll(async () => {
    const pruning = pruneDockerAllIfGithubAction({ logLevel });
    await damlTestLedger.start();
    
  });

  afterAll(async () => {
    await damlTestLedger.stop();
    await damlTestLedger.destroy();
  });

  describe("DAML SIMPLE IOU TRANSACTION", () => {
    it("DAML SIMPLE IOU TRANSACTION", async () => {
    /*==================
      PREREQUISITES
    ===================*/
    const getPartiesInvolvedVar: string = await damlTestLedger.getPartiesInvolved();
    console.log("parties involved")
    console.log(getPartiesInvolvedVar)
    //get the token for Alice
    const getTokenForAlice: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Alice")
    console.log("THIS IS THE TOKEN FOR ALICE-----")
    console.log(getTokenForAlice)
    
    // create a function for jwt generator
    const getAliceToken: string = damlTestLedger.generateJwtToken(getTokenForAlice);
    console.log(getAliceToken)

    //get the sample IOU contract using Alice
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
    const createIouUrl = "http://localhost:7575/v1/create"
    const responseForIOU = await fetch(createIouUrl, {
      method: "POST",
      body: JSON.stringify(iouBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAliceToken}`,
      },
    });
    const responseForIOUResult = await responseForIOU.json()
    console.log(responseForIOUResult)
    console.log(responseForIOUResult.result.templateId)
    console.log(responseForIOUResult.result.contractId)
    let IOUtemplateId = responseForIOUResult.result.templateId
    let IOUcontractId = responseForIOUResult.result.contractId

    /*==================
      STEP 2. Transfer IOU to BOB
    ===================*/
    const getHashForBob: string = damlTestLedger.getIdentifierByDisplayName(getPartiesInvolvedVar, "Bob")
    const getBobToken: string = damlTestLedger.generateJwtToken(getHashForBob);
    const transferToBobBody = {
      templateId: `${IOUtemplateId}`,
      contractId: `${IOUcontractId}`,
      choice: `Iou_Transfer`,
      argument: {
          newOwner: `${getHashForBob}`
      }
    }
  
    // console.log(transferToBobBody)
    const transferUrl = "http://localhost:7575/v1/exercise"
    const responseForTransfer = await fetch(transferUrl, {
      method: "POST",
      body: JSON.stringify(transferToBobBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAliceToken}`,
      },
    });
    const responseForTransferBody = await responseForTransfer.json()
    console.log("----transfer log")
    console.log(responseForTransferBody)

    /*==================
      STEP 3. Accept Transfer of IOU as BOB
    ===================*/
    const queryAsBob = await damlTestLedger.queryViaParticipant(getBobToken)
    console.log("query bob----")
    console.log(queryAsBob)

    let IOUTransfertemplateId = queryAsBob.result[1].templateId
    let IOUTransfercontractId = queryAsBob.result[1].contractId

    let acceptBody = {
      templateId: `${IOUTransfertemplateId}`,
      contractId: `${IOUTransfercontractId}`,
      choice: `IouTransfer_Accept`,
      argument: {
          newOwner: `${getBobToken}`
      }
    }
    const acceptUrl = "http://localhost:7575/v1/exercise"
    const acceptTransfer = await fetch(acceptUrl, {
      method: "POST",
      body: JSON.stringify(acceptBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getBobToken}`,
      },
    });
    const acceptTransferBody = await acceptTransfer.json()
    console.log("--------")
    console.log(acceptTransferBody)

    /*==================
      STEP 4. Check if transfer is successful by querying as BOB
    ===================*/
    let queryiou = await damlTestLedger.queryViaParticipant(getBobToken)
    console.log("-------iou")
    console.log(queryiou.result[1].templateId)
    let queryIOUAsBobTemplateId = queryiou.result[1].templateId

    let queryIouAsBobBody = {
      templateIds: [`${queryIOUAsBobTemplateId}`],
      query: {amount: 999.99},
      readers: [`${getHashForBob}`]
    }

    const iouAsBobUrl = "http://localhost:7575/v1/query"
    const queryIouAsBobRequest = await fetch(iouAsBobUrl, {
      method: "POST",
      body: JSON.stringify(queryIouAsBobBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getBobToken}`,
      },
    });
    const bobresponse = await queryIouAsBobRequest.json()
    console.log("quey as bob response-----")
    console.log(bobresponse)

    })
  })
});