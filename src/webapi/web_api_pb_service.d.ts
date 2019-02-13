// package: webrpc
// file: web_api.proto

import * as web_api_pb from "./web_api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WebApiOpenChannel = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.OpenChannelRequest;
  readonly responseType: typeof web_api_pb.OpenChannelResponse;
};

type WebApiDeposit = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.DepositRequest;
  readonly responseType: typeof web_api_pb.DepositResponse;
};

type WebApiWithdraw = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.WithdrawRequest;
  readonly responseType: typeof web_api_pb.WithdrawResponse;
};

type WebApiGetBalance = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetBalanceRequest;
  readonly responseType: typeof web_api_pb.GetBalanceResponse;
};

type WebApiSendConditionalPayment = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SendConditionalPaymentRequest;
  readonly responseType: typeof web_api_pb.SendConditionalPaymentResponse;
};

type WebApiCreateAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreateAppSessionRequest;
  readonly responseType: typeof web_api_pb.CreateAppSessionResponse;
};

type WebApiReceiveStates = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof web_api_pb.ReceiveStatesRequest;
  readonly responseType: typeof web_api_pb.StateMessage;
};

type WebApiSendState = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SendStateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiAckState = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.AckStateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiSettleAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SettleAppSessionRequest;
  readonly responseType: typeof web_api_pb.SettleAppSessionResponse;
};

type WebApiEndAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.EndAppSessionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiRegisterOracle = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.RegisterOracleRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiResolveOracle = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ResolveOracleRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class WebApi {
  static readonly serviceName: string;
  static readonly OpenChannel: WebApiOpenChannel;
  static readonly Deposit: WebApiDeposit;
  static readonly Withdraw: WebApiWithdraw;
  static readonly GetBalance: WebApiGetBalance;
  static readonly SendConditionalPayment: WebApiSendConditionalPayment;
  static readonly CreateAppSession: WebApiCreateAppSession;
  static readonly ReceiveStates: WebApiReceiveStates;
  static readonly SendState: WebApiSendState;
  static readonly AckState: WebApiAckState;
  static readonly SettleAppSession: WebApiSettleAppSession;
  static readonly EndAppSession: WebApiEndAppSession;
  static readonly RegisterOracle: WebApiRegisterOracle;
  static readonly ResolveOracle: WebApiResolveOracle;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WebApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  openChannel(
    requestMessage: web_api_pb.OpenChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.OpenChannelResponse|null) => void
  ): UnaryResponse;
  openChannel(
    requestMessage: web_api_pb.OpenChannelRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.OpenChannelResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: web_api_pb.DepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.DepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: web_api_pb.DepositRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.DepositResponse|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: web_api_pb.WithdrawRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.WithdrawResponse|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: web_api_pb.WithdrawRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.WithdrawResponse|null) => void
  ): UnaryResponse;
  getBalance(
    requestMessage: web_api_pb.GetBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetBalanceResponse|null) => void
  ): UnaryResponse;
  getBalance(
    requestMessage: web_api_pb.GetBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.GetBalanceResponse|null) => void
  ): UnaryResponse;
  sendConditionalPayment(
    requestMessage: web_api_pb.SendConditionalPaymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SendConditionalPaymentResponse|null) => void
  ): UnaryResponse;
  sendConditionalPayment(
    requestMessage: web_api_pb.SendConditionalPaymentRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SendConditionalPaymentResponse|null) => void
  ): UnaryResponse;
  createAppSession(
    requestMessage: web_api_pb.CreateAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateAppSessionResponse|null) => void
  ): UnaryResponse;
  createAppSession(
    requestMessage: web_api_pb.CreateAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.CreateAppSessionResponse|null) => void
  ): UnaryResponse;
  receiveStates(requestMessage: web_api_pb.ReceiveStatesRequest, metadata?: grpc.Metadata): ResponseStream<web_api_pb.StateMessage>;
  sendState(
    requestMessage: web_api_pb.SendStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendState(
    requestMessage: web_api_pb.SendStateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  ackState(
    requestMessage: web_api_pb.AckStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  ackState(
    requestMessage: web_api_pb.AckStateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  settleAppSession(
    requestMessage: web_api_pb.SettleAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SettleAppSessionResponse|null) => void
  ): UnaryResponse;
  settleAppSession(
    requestMessage: web_api_pb.SettleAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SettleAppSessionResponse|null) => void
  ): UnaryResponse;
  endAppSession(
    requestMessage: web_api_pb.EndAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  endAppSession(
    requestMessage: web_api_pb.EndAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  registerOracle(
    requestMessage: web_api_pb.RegisterOracleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  registerOracle(
    requestMessage: web_api_pb.RegisterOracleRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resolveOracle(
    requestMessage: web_api_pb.ResolveOracleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resolveOracle(
    requestMessage: web_api_pb.ResolveOracleRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

