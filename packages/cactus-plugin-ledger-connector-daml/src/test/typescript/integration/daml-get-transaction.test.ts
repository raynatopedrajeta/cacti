import "jest-extended";
import { v4 as uuidv4 } from "uuid";
import { spawn, exec } from "child_process";
// import { PluginRegistry } from "@hyperledger/cactus-core";
// import {
//   PluginLedgerConnectorBesu,
//   PluginFactoryLedgerConnector,
//   ReceiptType,
//   Web3SigningCredentialType,
// } from "../../../../main/typescript/public-api";
// import { PluginKeychainMemory } from "@hyperledger/cactus-plugin-keychain-memory";
import { DamlTestLedger } from "@hyperledger/cactus-test-tooling";
// import { LogLevelDesc, LoggerProvider } from "@hyperledger/cactus-common";
// import HelloWorldContractJson from "../../../solidity/hello-world-contract/HelloWorld.json";
// import Web3 from "web3";
// import { PluginImportType } from "@hyperledger/cactus-core-api";
// import { GetTransactionV1Request } from "../../../../main/typescript/generated/openapi/typescript-axios/api";
// curl -X GET http://localhost:7575/v1/query   -H "Content-Type: application/json"   -H "Authorization: Bearer $jwt_content"

describe("PluginLedgerConnectorBesu", () => {
  // const logLevel: LogLevelDesc = "TRACE";
  // const containerImageVersion = "latest";
  // const containerImageName =
  //   "cactuts/daml-all-in-one";

  // const damlOptions = { containerImageName, containerImageVersion };
  // const damlTestLedger = new DamlTestLedger(damlOptions);
  const damlTestLedger = new DamlTestLedger();
  // const log = LoggerProvider.getOrCreate({
  //   label: "v21-besu-get-transaction.test.ts",
  //   level: logLevel,
  // });

  let rpcApiHttpHost: string;
  // let rpcApiWsHost: string;
  // let firstHighNetWorthAccount: string;

  beforeAll(async () => {
    await damlTestLedger.start();
    rpcApiHttpHost = await damlTestLedger.getDamlApiHost();
  });

  afterAll(async () => {
    await damlTestLedger.stop();
    await damlTestLedger.destroy();
  });

  // create a sample test case for daml aio. insert the v1/fetch somewhere here
  // 1st step. kailangan mag start yung daml - ok na
  describe("daml testing dummy", () => {
    it("daml it dummy", async () => {
      console.log("hello renren is here bro")
      console.log(rpcApiHttpHost)
    })
  })
  // test("can get past logs of an account", async () => {
  //   console.log("hello i am renren")
  //   // const web3 = new Web3(rpcApiHttpHost);

  //   // const testEthAccount = web3.eth.accounts.create(uuidv4());

  //   // const keychainEntryKey = uuidv4();
  //   // const keychainEntryValue = testEthAccount.privateKey;
  //   // const keychainPlugin = new PluginKeychainMemory({
  //   //   instanceId: uuidv4(),
  //   //   keychainId: uuidv4(),
  //   //   // pre-provision keychain with mock backend holding the private key of the
  //   //   // test account that we'll reference while sending requests with the
  //   //   // signing credential pointing to this keychain entry.
  //   //   backend: new Map([[keychainEntryKey, keychainEntryValue]]),
  //   //   logLevel,
  //   // });
  //   // keychainPlugin.set(
  //   //   HelloWorldContractJson.contractName,
  //   //   JSON.stringify(HelloWorldContractJson),
  //   // );
  //   // const factory = new PluginFactoryLedgerConnector({
  //   //   pluginImportType: PluginImportType.Local,
  //   // });

  //   // const connector: PluginLedgerConnectorBesu = await factory.create({
  //   //   rpcApiHttpHost,
  //   //   rpcApiWsHost,
  //   //   instanceId: uuidv4(),
  //   //   pluginRegistry: new PluginRegistry({ plugins: [keychainPlugin] }),
  //   // });

  //   // const privateKey = await damlTestLedger.getGenesisAccountPrivKey();
  //   // const { transactionReceipt } = await connector.transact({
  //   //   web3SigningCredential: {
  //   //     ethAccount: firstHighNetWorthAccount,
  //   //     secret: privateKey,
  //   //     type: Web3SigningCredentialType.PrivateKeyHex,
  //   //   },
  //   //   consistencyStrategy: {
  //   //     blockConfirmations: 0,
  //   //     receiptType: ReceiptType.LedgerBlockAck,
  //   //     timeoutMs: 60000,
  //   //   },
  //   //   transactionConfig: {
  //   //     from: firstHighNetWorthAccount,
  //   //     to: testEthAccount.address,
  //   //     value: 10e9,
  //   //     gas: 1000000,
  //   //   },
  //   // });

  //   // const req: GetTransactionV1Request = {
  //   //   transactionHash: transactionReceipt.transactionHash,
  //   // };
  //   // const response = await connector.getTransaction(req);
  //   // log.debug("Transaction in HTTP response: %o", response.transaction);
  //   // expect(response).toBeTruthy();
  //   // expect(response.transaction).toBeTruthy();

  //   // expect(response.transaction).toBeObject();
  //   // expect(response.transaction).not.toBeEmptyObject();
  // });
});
