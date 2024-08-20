import type { Server } from "http";
import type { Server as SecureServer } from "https";
import type { Config as SshConfig } from "node-ssh";
import type { Express } from "express";
// import urlcat from "urlcat";
import OAS from "../json/openapi.json";
import axios from 'axios';
// import { BadRequestError, GatewayTimeoutError } from "http-errors-enhanced-cjs";

import {
  QueryIOUEndpointRequest,
  QueryIOUEndpointResponse,
  QueryRawIOUEndpointRequest,
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

import {
  IExerciseIOUEndpointOptions,
  ExerciseIOUEndpoint
} from "./web-services/exercise-iou-endpoint";

import {
  IQueryIOUEndpointOptions,
  QueryIOUEndpoint
} from "./web-services/query-iou-endpoint";

import {
  IQueryRawIOUEndpointOptions,
  QueryRawIOUEndpoint
} from "./web-services/query-raw-iou-endpoint";

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
  //   CreateIOUEndpointResponse,
  //   CreateIOUEndpointRequest,
  //   QueryIOUEndpointResponse
  //   any
  // >,
  //   IPluginWebService
{
  // public static readonly CLASS_NAME = "DeployContractJarsEndpoint";

  private readonly instanceId: string;
  private readonly log: Logger;
  private endpoints: IWebServiceEndpoint[] | undefined;

  constructor(public readonly options: IPluginLedgerConnectorDAMLOptions) {
    const level = options.logLevel || "INFO";
    const label = "plugin-ledger-connector-daml";
    this.log = LoggerProvider.getOrCreate({ level, label });

    this.instanceId = this.options.instanceId;
  }

  public getPackageName(): string {
    return "@hyperledger/cactus-plugin-ledger-connector-daml";
  }

  public async registerWebServices(app: Express): Promise<IWebServiceEndpoint[]> {
    const webServices = await this.getOrCreateWebServices();
    await Promise.all(webServices.map((ws) => ws.registerExpress(app)));
    // await Promise.all(webServices.map((ws) => ws.registerExpress(app)));
    return webServices;
  }

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

    {
      const opts: IQueryIOUEndpointOptions = {
        apiUrl: this.options.apiUrl as string,
        logLevel: this.options.logLevel,
        connector: this,
      };
      const endpoint = new QueryIOUEndpoint(opts);
      endpoints.push(endpoint);
    }

    {
      const opts: IQueryRawIOUEndpointOptions = {
        apiUrl: this.options.apiUrl as string,
        logLevel: this.options.logLevel,
        connector: this,
      };
      const endpoint = new QueryRawIOUEndpoint(opts);
      endpoints.push(endpoint);
    }

    {
      const opts: IExerciseIOUEndpointOptions = {
        apiUrl: this.options.apiUrl as string,
        logLevel: this.options.logLevel,
        connector: this,
      };
      const endpoint = new ExerciseIOUEndpoint(opts);
      endpoints.push(endpoint);
    }

    this.log.info(`Instantiated endpoints of ${pkgName}`);
    return endpoints;
  }

  public async shutdown(): Promise<void> {
    return;
  }

  public getOpenApiSpec(): unknown {
    return OAS;
  }

  public getInstanceId(): string {
    return this.instanceId;
  }

  public async onPluginInit(): Promise<unknown> {
    return;
  }

  public async createContract(req: CreateIOUEndpointRequest, testdata: string): Promise<any> {
    const createIouUrl = "http://localhost:7575/v1/create"
    let getRequestPayload = JSON.stringify(req.payload);
    const parsePayload = JSON.parse(getRequestPayload)
    const participantHash = parsePayload.issuer

    const participantToken = await this.generateJwtToken(participantHash)
    const responseForIOU = await fetch(createIouUrl, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${participantToken}`,
      },
    });
    const responseForIOUResult = await responseForIOU.json()

    return responseForIOUResult
  } 
  
  public async exerciseContract(req: ExerciseIOUEndpointRequest, testdata: string): Promise<any> {
    const exerciseIouUrl = "http://localhost:7575/v1/exercise"
    let getRequestPayload = JSON.stringify(req);
    const parsePayload = JSON.parse(getRequestPayload)
    let participantHash = parsePayload.participantToken
    const requestBody = {
      templateId: parsePayload.templateId,
      contractId: parsePayload.contractId,
      choice: parsePayload.choice,
      argument: parsePayload.argument
    }

    const responseForIOU = await fetch(exerciseIouUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${participantHash}`,
      },
    });
    const responseForIOUResult = await responseForIOU.json()
    return responseForIOUResult
  }

  public async queryContract(req: QueryIOUEndpointRequest): Promise<any> {
    const exerciseIouUrl = "http://localhost:7575/v1/query"

    let getRequestPayload = JSON.stringify(req);
    const parsePayload = JSON.parse(getRequestPayload)
    let participantToken = parsePayload.participantToken
    const requestBody = {
      templateIds: parsePayload.templateIds,
      query: parsePayload.query,
      readers: parsePayload.readers
    }

    const responseForIOU = await fetch(exerciseIouUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${participantToken}`,
      },
    });

    const responseForIOUResult = await responseForIOU.json()
    return responseForIOUResult

  }

  public async queryRawContract(req: QueryRawIOUEndpointRequest): Promise<any> {
    const exerciseIouUrl = "http://localhost:7575/v1/query"

    let getRequestPayload = JSON.stringify(req);
    const parsePayload = JSON.parse(getRequestPayload);
    let participantToken = parsePayload.participantToken;
      
    const responseForIOU = await fetch(exerciseIouUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${participantToken}`,
      },
    });

    const responseForIOUResult = await responseForIOU.json()
    return responseForIOUResult

  }

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

}
