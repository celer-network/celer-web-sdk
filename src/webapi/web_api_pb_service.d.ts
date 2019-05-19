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
  readonly responseType: typeof web_api_pb.ChannelID;
};

type WebApiDeposit = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.DepositRequest;
  readonly responseType: typeof web_api_pb.TxHash;
};

type WebApiWithdraw = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.WithdrawRequest;
  readonly responseType: typeof web_api_pb.TxHash;
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
  readonly responseType: typeof web_api_pb.PaymentID;
};

type WebApiSubscribeIncomingPayments = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof web_api_pb.PaymentInfo;
};

type WebApiConfirmOutgoingPayment = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.PaymentID;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiRejectIncomingPayment = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.PaymentID;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiSettleIncomingPayment = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.PaymentID;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiCreateAppSessionOnDeployedContract = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.CreateAppSessionOnDeployedContractRequest;
  readonly responseType: typeof web_api_pb.SessionID;
};

type WebApiSubscribeAppSessionDisputes = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.DisputeInfo;
};

type WebApiSignOutgoingState = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SignOutgoingStateRequest;
  readonly responseType: typeof web_api_pb.SignedState;
};

type WebApiValidateAck = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ValidateAckRequest;
  readonly responseType: typeof web_api_pb.BoolValue;
};

type WebApiProcessReceivedState = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ProcessReceivedStateRequest;
  readonly responseType: typeof web_api_pb.ProcessReceivedStateResponse;
};

type WebApiSettleAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SettleAppSessionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiEndAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiGetDeployedAddressForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.Address;
};

type WebApiGetBooleanResultForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetBooleanResultForAppSessionRequest;
  readonly responseType: typeof web_api_pb.BooleanResult;
};

type WebApiApplyActionForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.ApplyActionForAppSessionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiFinalizeOnActionTimeoutForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type WebApiGetSettleFinalizedTimeForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.SettleFinalizedTime;
};

type WebApiGetActionDeadlineForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.ActionDeadline;
};

type WebApiGetStatusForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.AppSessionStatus;
};

type WebApiGetStateForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.GetStateForAppSessionRequest;
  readonly responseType: typeof web_api_pb.AppSessionState;
};

type WebApiGetSeqNumForAppSession = {
  readonly methodName: string;
  readonly service: typeof WebApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof web_api_pb.SessionID;
  readonly responseType: typeof web_api_pb.AppSessionSeqNum;
};

export class WebApi {
  static readonly serviceName: string;
  static readonly OpenChannel: WebApiOpenChannel;
  static readonly Deposit: WebApiDeposit;
  static readonly Withdraw: WebApiWithdraw;
  static readonly GetBalance: WebApiGetBalance;
  static readonly SendConditionalPayment: WebApiSendConditionalPayment;
  static readonly SubscribeIncomingPayments: WebApiSubscribeIncomingPayments;
  static readonly ConfirmOutgoingPayment: WebApiConfirmOutgoingPayment;
  static readonly RejectIncomingPayment: WebApiRejectIncomingPayment;
  static readonly SettleIncomingPayment: WebApiSettleIncomingPayment;
  static readonly CreateAppSessionOnDeployedContract: WebApiCreateAppSessionOnDeployedContract;
  static readonly SubscribeAppSessionDisputes: WebApiSubscribeAppSessionDisputes;
  static readonly SignOutgoingState: WebApiSignOutgoingState;
  static readonly ValidateAck: WebApiValidateAck;
  static readonly ProcessReceivedState: WebApiProcessReceivedState;
  static readonly SettleAppSession: WebApiSettleAppSession;
  static readonly EndAppSession: WebApiEndAppSession;
  static readonly GetDeployedAddressForAppSession: WebApiGetDeployedAddressForAppSession;
  static readonly GetBooleanResultForAppSession: WebApiGetBooleanResultForAppSession;
  static readonly ApplyActionForAppSession: WebApiApplyActionForAppSession;
  static readonly FinalizeOnActionTimeoutForAppSession: WebApiFinalizeOnActionTimeoutForAppSession;
  static readonly GetSettleFinalizedTimeForAppSession: WebApiGetSettleFinalizedTimeForAppSession;
  static readonly GetActionDeadlineForAppSession: WebApiGetActionDeadlineForAppSession;
  static readonly GetStatusForAppSession: WebApiGetStatusForAppSession;
  static readonly GetStateForAppSession: WebApiGetStateForAppSession;
  static readonly GetSeqNumForAppSession: WebApiGetSeqNumForAppSession;
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
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ChannelID|null) => void
  ): UnaryResponse;
  openChannel(
    requestMessage: web_api_pb.OpenChannelRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ChannelID|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: web_api_pb.DepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.TxHash|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: web_api_pb.DepositRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.TxHash|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: web_api_pb.WithdrawRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.TxHash|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: web_api_pb.WithdrawRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.TxHash|null) => void
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
    callback: (error: ServiceError|null, responseMessage: web_api_pb.PaymentID|null) => void
  ): UnaryResponse;
  sendConditionalPayment(
    requestMessage: web_api_pb.SendConditionalPaymentRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.PaymentID|null) => void
  ): UnaryResponse;
  subscribeIncomingPayments(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<web_api_pb.PaymentInfo>;
  confirmOutgoingPayment(
    requestMessage: web_api_pb.PaymentID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  confirmOutgoingPayment(
    requestMessage: web_api_pb.PaymentID,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  rejectIncomingPayment(
    requestMessage: web_api_pb.PaymentID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  rejectIncomingPayment(
    requestMessage: web_api_pb.PaymentID,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  settleIncomingPayment(
    requestMessage: web_api_pb.PaymentID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  settleIncomingPayment(
    requestMessage: web_api_pb.PaymentID,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createAppSessionOnDeployedContract(
    requestMessage: web_api_pb.CreateAppSessionOnDeployedContractRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SessionID|null) => void
  ): UnaryResponse;
  createAppSessionOnDeployedContract(
    requestMessage: web_api_pb.CreateAppSessionOnDeployedContractRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SessionID|null) => void
  ): UnaryResponse;
  subscribeAppSessionDisputes(requestMessage: web_api_pb.SessionID, metadata?: grpc.Metadata): ResponseStream<web_api_pb.DisputeInfo>;
  signOutgoingState(
    requestMessage: web_api_pb.SignOutgoingStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SignedState|null) => void
  ): UnaryResponse;
  signOutgoingState(
    requestMessage: web_api_pb.SignOutgoingStateRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SignedState|null) => void
  ): UnaryResponse;
  validateAck(
    requestMessage: web_api_pb.ValidateAckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.BoolValue|null) => void
  ): UnaryResponse;
  validateAck(
    requestMessage: web_api_pb.ValidateAckRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.BoolValue|null) => void
  ): UnaryResponse;
  processReceivedState(
    requestMessage: web_api_pb.ProcessReceivedStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ProcessReceivedStateResponse|null) => void
  ): UnaryResponse;
  processReceivedState(
    requestMessage: web_api_pb.ProcessReceivedStateRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ProcessReceivedStateResponse|null) => void
  ): UnaryResponse;
  settleAppSession(
    requestMessage: web_api_pb.SettleAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  settleAppSession(
    requestMessage: web_api_pb.SettleAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  endAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  endAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getDeployedAddressForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.Address|null) => void
  ): UnaryResponse;
  getDeployedAddressForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.Address|null) => void
  ): UnaryResponse;
  getBooleanResultForAppSession(
    requestMessage: web_api_pb.GetBooleanResultForAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.BooleanResult|null) => void
  ): UnaryResponse;
  getBooleanResultForAppSession(
    requestMessage: web_api_pb.GetBooleanResultForAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.BooleanResult|null) => void
  ): UnaryResponse;
  applyActionForAppSession(
    requestMessage: web_api_pb.ApplyActionForAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  applyActionForAppSession(
    requestMessage: web_api_pb.ApplyActionForAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  finalizeOnActionTimeoutForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  finalizeOnActionTimeoutForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getSettleFinalizedTimeForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SettleFinalizedTime|null) => void
  ): UnaryResponse;
  getSettleFinalizedTimeForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.SettleFinalizedTime|null) => void
  ): UnaryResponse;
  getActionDeadlineForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ActionDeadline|null) => void
  ): UnaryResponse;
  getActionDeadlineForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.ActionDeadline|null) => void
  ): UnaryResponse;
  getStatusForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionStatus|null) => void
  ): UnaryResponse;
  getStatusForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionStatus|null) => void
  ): UnaryResponse;
  getStateForAppSession(
    requestMessage: web_api_pb.GetStateForAppSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionState|null) => void
  ): UnaryResponse;
  getStateForAppSession(
    requestMessage: web_api_pb.GetStateForAppSessionRequest,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionState|null) => void
  ): UnaryResponse;
  getSeqNumForAppSession(
    requestMessage: web_api_pb.SessionID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionSeqNum|null) => void
  ): UnaryResponse;
  getSeqNumForAppSession(
    requestMessage: web_api_pb.SessionID,
    callback: (error: ServiceError|null, responseMessage: web_api_pb.AppSessionSeqNum|null) => void
  ): UnaryResponse;
}

