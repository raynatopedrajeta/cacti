import type { Server } from "http";
import type { Server as SecureServer } from "https";
import type { Config as SshConfig } from "node-ssh";
import type { Express } from "express";
// import urlcat from "urlcat";
import OAS from "../json/openapi.json";
import axios from 'axios';
// import { BadRequestError, GatewayTimeoutError } from "http-errors-enhanced-cjs";

import {
  CreateIOUEndpointRequest,
  CreateIOUEndpointResponse,
  ExerciseIOUEndpointRequest,
  ExerciseIOUEndpointResponse
} from "./generated/openapi/typescript-axios";

import {
  IPluginLedgerConnector,
  IWebServiceEndpoint,
  IPluginWebService,
  ICactusPluginOptions,
  ConsensusAlgorithmFamily,
} from "@hyperledger/cactus-core-api";
import { consensusHasTransactionFinality } from "@hyperledger/cactus-core";
import {
  Checks,
  Logger,
  LoggerProvider,
  LogLevelDesc,
} from "@hyperledger/cactus-common";

import {
  ICreateIOUEndpointOptions,
  CreateIOUEndpoint
} from "./web-services/create-iou-endpoint";

import fs from "fs";
import fetch from "node-fetch";
import https from "https";
import * as crypto from 'crypto';

export interface IPluginLedgerConnectorDAMLOptions
  extends ICactusPluginOptions {
  logLevel?: LogLevelDesc;
  // sshConfigAdminShell: SshConfig;
  apiUrl?: string;
  /**
   * Path to the file where the private key for the ssh configuration is located
   * This property is optional. Its use is not recommended for most cases, it will override the privateKey property of the sshConfigAdminShell.
   * @type {string}
   * @memberof IPluginLedgerConnectorDAMLOptions
   */
  sshPrivateKeyPath?: string;
}

export class PluginLedgerConnectorDAML
  // implements
  // IPluginLedgerConnector<
  //   CreateIOUEndpointRequest,
  //   CreateIOUEndpointResponse
  //   any
  // >,
  //   IPluginWebService
{
  // public static readonly CLASS_NAME = "DeployContractJarsEndpoint";




  // private readonly instanceId: string;
  private readonly log: Logger;
  private endpoints: IWebServiceEndpoint[] | undefined;

  // private httpServer: Server | SecureServer | null = null;

  constructor(public readonly options: IPluginLedgerConnectorDAMLOptions) {
    // constructor() {
    // const fnTag = `${this.className}#constructor()`;

    // Checks.truthy(options, `${fnTag} options`);
    // Checks.truthy(options.sshConfigAdminShell, `${fnTag} sshConfigAdminShell`);
    // Checks.truthy(options.instanceId, `${fnTag} instanceId`);

    const level = options.logLevel || "INFO";
    const label = "plugin-ledger-connector-daml";
    this.log = LoggerProvider.getOrCreate({ level, label });
    // this.instanceId = this.options.instanceId;

    // if privateKeyPath exists, overwrite privateKey in sshConfigAdminShell
    // this.readSshPrivateKeyFromFile();
  }

  // public getOpenApiSpec(): unknown {
  //   return OAS;
  // }


  // public async getConsensusAlgorithmFamily(): Promise<ConsensusAlgorithmFamily> {
  //   return ConsensusAlgorithmFamily.Authority;
  // }
  // public async hasTransactionFinality(): Promise<boolean> {
  //   const currentConsensusAlgorithmFamily =
  //     await this.getConsensusAlgorithmFamily();

  //   return consensusHasTransactionFinality(currentConsensusAlgorithmFamily);
  // }

  // public getInstanceId(): string {
  //   return this.instanceId;
  // }

  public getPackageName(): string {
    return "@hyperledger/cactus-plugin-ledger-connector-daml";
  }

  // public async onPluginInit(): Promise<unknown> {
  //   return;
  // }

  // public deployContract(): Promise<any> {
  //   throw new Error("Method not implemented.");
  // }

  public async registerWebServices(app: Express): Promise<IWebServiceEndpoint[]> {
    console.log("aldous --------")
    const webServices = await this.getOrCreateWebServices();
    await Promise.all(webServices.map((ws) => ws.registerExpress(app)));
    // await Promise.all(webServices.map((ws) => ws.registerExpress(app)));
    return webServices;
  }

  // private readSshPrivateKeyFromFile(): void {
  //   const { sshPrivateKeyPath } = this.options;
  //   if (sshPrivateKeyPath) {
  //     const fileContent = fs
  //       .readFileSync(sshPrivateKeyPath, "utf-8")
  //       .toString();
  //     this.options.sshConfigAdminShell.privateKey = fileContent;
  //   }
  // }

  public async getOrCreateWebServices(): Promise<IWebServiceEndpoint[]> {
    if (Array.isArray(this.endpoints)) {
      return this.endpoints;
    }
    const pkgName = this.getPackageName();
    this.log.info(`Instantiating web services for ${pkgName}...`);
    const endpoints: IWebServiceEndpoint[] = [];
    {
      const opts: ICreateIOUEndpointOptions = {
        apiUrl: this.options.apiUrl as string,
        logLevel: this.options.logLevel,
        connector: this,
      };
      const endpoint = new CreateIOUEndpoint(opts);
      endpoints.push(endpoint);
    }
    this.log.info(`Instantiated endpoints of ${pkgName}`);
    return endpoints;
  }

  // public async shutdown(): Promise<void> {
  //   return;
  // }

  // public async getFlowList(): Promise<string[]> {
  //   return ["getFlowList()_NOT_IMPLEMENTED"];
  // }

  // private async setupRequest(
  //   username: string,
  //   password: string,
  //   rejectUnauthorized: boolean,
  // ): Promise<{ headers: any; agent: any }> {
  //   const authString = Buffer.from(`${username}:${password}`).toString(
  //     "base64",
  //   );
  //   const headers = { Authorization: `Basic ${authString}` };
  //   const httpsAgent = new https.Agent({
  //     rejectUnauthorized,
  //   });
  //   return { headers, agent: httpsAgent };
  // }

  // private validateHoldingIDShortHash(inputString: string): boolean {
  //   /* only hexadecimal characters and exactly 12 characters long as per the corda docs
  //      https://docs.r3.com/en/platform/corda/5.2/developing-applications/cordapp-template/utxo-ledger-example-cordapp/running-the-chat-cordapp.html#using-swagger
  //   */
  //   const pattern = /^[0-9A-Fa-f]{12}$/;
  //   return pattern.test(inputString);
  // }
  public async createContract(req: CreateIOUEndpointRequest, testdata: string): Promise<any> {
    // console.log("the code is now working here")
    const createIouUrl = "http://localhost:7575/v1/create"
    console.log("hello I am here-----")
    // console.log(req.payload)
    // const parseData = JSON.stringify(req)
    console.log(testdata);
    console.log(req.payload);
    let getRequestPayload = JSON.stringify(req.payload);
    const parsePayload = JSON.parse(getRequestPayload)
    const participantHash = parsePayload.issuer
    // console.log(parsePayload.issuer)

    // const participantHash = getRequestPayload.issuer
    
    // const participantHash = req.payload.issuer
    const participantToken = await this.generateJwtToken(participantHash)
    console.log("---participant here---")
    console.log(participantToken)
    // console.log(parseData)
    
    // console.log(req.templateId)
    // const parsedData = JSON.parse(req.te)

    // const payload = await req.payload
    console.log("-----parse data-----")
    const responseForIOU = await fetch(createIouUrl, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${participantToken}`,
      },
    });
    // console.log(responseForIOU)
    const responseForIOUResult = await responseForIOU.json()
    console.log(responseForIOUResult);

    return responseForIOUResult

    // const parsedData = JSON.parse(req.config.payload)
    // console.log(parsedData)
    // console.log(parsedData)
    // const response = await axios.post({
    //   method: "post",
    //   url: createIouUrl, 
    //   data: req,
    //   {
    //     headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getParticipantToken}`,
    //     }
    //   }
    // });
  }
  
  // public async exerciseContract(req: ExerciseIOUEndpointRequest, testdata: string): Promise<any> {
  //   // console.log("the code is now working here")
  //   const createIouUrl = "http://localhost:7575/v1/exercise"
  //   // console.log(req.payload)
  //   // const parseData = JSON.stringify(req)
  //   console.log(testdata);
  //   console.log(req.payload);
  //   let getRequestPayload = JSON.stringify(req.payload);
  //   const parsePayload = JSON.parse(getRequestPayload)
  //   const participantHash = parsePayload.issuer
  //   // console.log(parsePayload.issuer)

  //   // const participantHash = getRequestPayload.issuer
    
  //   // const participantHash = req.payload.issuer
  //   const participantToken = await this.generateJwtToken(participantHash)
  //   console.log("---participant here---")
  //   console.log(participantToken)
  //   // console.log(parseData)
    
  //   // console.log(req.templateId)
  //   // const parsedData = JSON.parse(req.te)

  //   // const payload = await req.payload
  //   console.log("-----parse data-----")
  //   const responseForIOU = await fetch(createIouUrl, {
  //     method: "POST",
  //     body: JSON.stringify(req),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${participantToken}`,
  //     },
  //   });
  //   // console.log(responseForIOU)
  //   const responseForIOUResult = await responseForIOU.json()
  //   console.log(responseForIOUResult);

  //   // const parsedData = JSON.parse(req.config.payload)
  //   // console.log(parsedData)
  //   // console.log(parsedData)
  //   // const response = await axios.post({
  //   //   method: "post",
  //   //   url: createIouUrl, 
  //   //   data: req,
  //   //   {
  //   //     headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization: `Bearer ${getParticipantToken}`,
  //   //     }
  //   //   }
  //   // });
  // }


  public async generateJwtToken(participant: string): Promise<string> {
    const base64UrlEncode = (input: Buffer): string => {
      return input.toString('base64')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
    };
    const header = base64UrlEncode(Buffer.from('{"alg":"HS256","typ":"JWT"}'));
    const payload = base64UrlEncode(Buffer.from(`{"https://daml.com/ledger-api": {"ledgerId": "sandbox", "applicationId": "foobar","actAs":["${participant}"]}}`));
    const hmacSignature = base64UrlEncode(crypto.createHmac('sha256', 'secret')
        .update(`${header}.${payload}`)
        .digest());
    return `${header}.${payload}.${hmacSignature}`
  }
    // const parseRequest = JSON.parse(req.config.data)
    // console.log(parseRequest)


    // const getRequest = await axios
    // const gettemplateid = req.templateId
    // console.log(gettemplateid)
    // console.log()
    // const getParticipantToken = req.payload.issuer
    // const responseForIOU = await fetch(createIouUrl, {
    //   method: "POST",
    //   body: JSON.stringify(req),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getParticipantToken}`,
    //   },
    // });
    // const responseForIOUResult = await responseForIOU.json()
    // return responseForIOUResult
    // return "Hello I am here xxxyyy";
  // public async exerciseContract(req: StartFlowV1Request): Promise<any> {}
  // public async queryContract(req: StartFlowV1Request): Promise<any> {}
  // public async getDamlAuthorizationToken(): Promise<string> {
  //   const docker = new Docker();
  //   const aContainerInfo = await this.getContainerInfo();
  //   const containerId = aContainerInfo.Id
  //   const exec = await docker.getContainer(containerId).exec({
  //     AttachStdin: false,
  //     AttachStdout: true,
  //     AttachStderr: true,
  //     Tty: false,
  //     Cmd: ['/bin/bash', '-c', 'cat jwt'], // Command to execute
  //   });
  //   const stream = await exec.start({});


  //   return new Promise<string>((resolve, reject) => {
  //     let output = '';
  //     stream.on('data', (data: Buffer) => {
  //       output += data.toString(); // Accumulate the output
  //       // Remove the extra characters
  //       const removettyvalues = output.replace(/^[\u0001\u0000\u0000\u0000\u0000\u0000\u0000]*/, '').trim()
  //       const removeunwantedcharacter = removettyvalues.replace(/�/g, '');

  //       resolve(removeunwantedcharacter)
  //     });
  //     stream.on('error', (err: Error) => {
  //       reject(err);
  //     });
  //   });
  // }
}
