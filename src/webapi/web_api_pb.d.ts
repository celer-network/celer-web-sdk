// package: webrpc
// file: web_api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class OpenChannelRequest extends jspb.Message {
  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getAmountWei(): string;
  setAmountWei(value: string): void;

  getPeerAmountWei(): string;
  setPeerAmountWei(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenChannelRequest): OpenChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenChannelRequest;
  static deserializeBinaryFromReader(message: OpenChannelRequest, reader: jspb.BinaryReader): OpenChannelRequest;
}

export namespace OpenChannelRequest {
  export type AsObject = {
    tokenType: string,
    tokenAddress: string,
    amountWei: string,
    peerAmountWei: string,
  }
}

export class OpenChannelResponse extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenChannelResponse): OpenChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenChannelResponse;
  static deserializeBinaryFromReader(message: OpenChannelResponse, reader: jspb.BinaryReader): OpenChannelResponse;
}

export namespace OpenChannelResponse {
  export type AsObject = {
    channelId: string,
  }
}

export class DepositRequest extends jspb.Message {
  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getAmountWei(): string;
  setAmountWei(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRequest): DepositRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRequest;
  static deserializeBinaryFromReader(message: DepositRequest, reader: jspb.BinaryReader): DepositRequest;
}

export namespace DepositRequest {
  export type AsObject = {
    tokenType: string,
    tokenAddress: string,
    amountWei: string,
  }
}

export class DepositResponse extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepositResponse): DepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositResponse;
  static deserializeBinaryFromReader(message: DepositResponse, reader: jspb.BinaryReader): DepositResponse;
}

export namespace DepositResponse {
  export type AsObject = {
    txHash: string,
  }
}

export class WithdrawRequest extends jspb.Message {
  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getAmountWei(): string;
  setAmountWei(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawRequest): WithdrawRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawRequest;
  static deserializeBinaryFromReader(message: WithdrawRequest, reader: jspb.BinaryReader): WithdrawRequest;
}

export namespace WithdrawRequest {
  export type AsObject = {
    tokenType: string,
    tokenAddress: string,
    amountWei: string,
  }
}

export class WithdrawResponse extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawResponse): WithdrawResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawResponse;
  static deserializeBinaryFromReader(message: WithdrawResponse, reader: jspb.BinaryReader): WithdrawResponse;
}

export namespace WithdrawResponse {
  export type AsObject = {
    txHash: string,
  }
}

export class GetBalanceRequest extends jspb.Message {
  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceRequest): GetBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(message: GetBalanceRequest, reader: jspb.BinaryReader): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {
    tokenType: string,
    tokenAddress: string,
  }
}

export class GetBalanceResponse extends jspb.Message {
  getFreeBalance(): string;
  setFreeBalance(value: string): void;

  getLockedBalance(): string;
  setLockedBalance(value: string): void;

  getReceivingCapacity(): string;
  setReceivingCapacity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceResponse): GetBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(message: GetBalanceResponse, reader: jspb.BinaryReader): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    freeBalance: string,
    lockedBalance: string,
    receivingCapacity: string,
  }
}

export class Condition extends jspb.Message {
  getDeadline(): string;
  setDeadline(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getArgsForIsFinalized(): Uint8Array | string;
  getArgsForIsFinalized_asU8(): Uint8Array;
  getArgsForIsFinalized_asB64(): string;
  setArgsForIsFinalized(value: Uint8Array | string): void;

  getArgsForQueryResult(): Uint8Array | string;
  getArgsForQueryResult_asU8(): Uint8Array;
  getArgsForQueryResult_asB64(): string;
  setArgsForQueryResult(value: Uint8Array | string): void;

  getOnChainDeployed(): boolean;
  setOnChainDeployed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    deadline: string,
    sessionId: string,
    argsForIsFinalized: Uint8Array | string,
    argsForQueryResult: Uint8Array | string,
    onChainDeployed: boolean,
  }
}

export class SendConditionalPaymentRequest extends jspb.Message {
  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getAmountWei(): string;
  setAmountWei(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): Condition | undefined;
  setCondition(value?: Condition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendConditionalPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendConditionalPaymentRequest): SendConditionalPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendConditionalPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendConditionalPaymentRequest;
  static deserializeBinaryFromReader(message: SendConditionalPaymentRequest, reader: jspb.BinaryReader): SendConditionalPaymentRequest;
}

export namespace SendConditionalPaymentRequest {
  export type AsObject = {
    tokenType: string,
    tokenAddress: string,
    amountWei: string,
    destination: string,
    condition?: Condition.AsObject,
  }
}

export class SendConditionalPaymentResponse extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendConditionalPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendConditionalPaymentResponse): SendConditionalPaymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendConditionalPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendConditionalPaymentResponse;
  static deserializeBinaryFromReader(message: SendConditionalPaymentResponse, reader: jspb.BinaryReader): SendConditionalPaymentResponse;
}

export namespace SendConditionalPaymentResponse {
  export type AsObject = {
    paymentId: string,
  }
}

export class CreateAppSessionRequest extends jspb.Message {
  getBin(): string;
  setBin(value: string): void;

  getAbi(): string;
  setAbi(value: string): void;

  getConstructor(): string;
  setConstructor(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppSessionRequest): CreateAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppSessionRequest;
  static deserializeBinaryFromReader(message: CreateAppSessionRequest, reader: jspb.BinaryReader): CreateAppSessionRequest;
}

export namespace CreateAppSessionRequest {
  export type AsObject = {
    bin: string,
    abi: string,
    constructor: string,
    nonce: string,
  }
}

export class CreateAppSessionResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppSessionResponse): CreateAppSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppSessionResponse;
  static deserializeBinaryFromReader(message: CreateAppSessionResponse, reader: jspb.BinaryReader): CreateAppSessionResponse;
}

export namespace CreateAppSessionResponse {
  export type AsObject = {
    sessionId: string,
  }
}

export class StateMessage extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getSeq(): string;
  setSeq(value: string): void;

  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StateMessage): StateMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StateMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateMessage;
  static deserializeBinaryFromReader(message: StateMessage, reader: jspb.BinaryReader): StateMessage;
}

export namespace StateMessage {
  export type AsObject = {
    sessionId: string,
    seq: string,
    state: Uint8Array | string,
  }
}

export class SendStateRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendStateRequest): SendStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendStateRequest;
  static deserializeBinaryFromReader(message: SendStateRequest, reader: jspb.BinaryReader): SendStateRequest;
}

export namespace SendStateRequest {
  export type AsObject = {
    sessionId: string,
    destination: string,
    state: Uint8Array | string,
  }
}

export class AckStateRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getSeq(): string;
  setSeq(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AckStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AckStateRequest): AckStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AckStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AckStateRequest;
  static deserializeBinaryFromReader(message: AckStateRequest, reader: jspb.BinaryReader): AckStateRequest;
}

export namespace AckStateRequest {
  export type AsObject = {
    sessionId: string,
    seq: string,
  }
}

export class ReceiveStatesRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveStatesRequest): ReceiveStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveStatesRequest;
  static deserializeBinaryFromReader(message: ReceiveStatesRequest, reader: jspb.BinaryReader): ReceiveStatesRequest;
}

export namespace ReceiveStatesRequest {
  export type AsObject = {
    sessionId: string,
  }
}

export class SettleAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettleAppSessionRequest): SettleAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleAppSessionRequest;
  static deserializeBinaryFromReader(message: SettleAppSessionRequest, reader: jspb.BinaryReader): SettleAppSessionRequest;
}

export namespace SettleAppSessionRequest {
  export type AsObject = {
    sessionId: string,
  }
}

export class SettleAppSessionResponse extends jspb.Message {
  getContractAddress(): string;
  setContractAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleAppSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettleAppSessionResponse): SettleAppSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleAppSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleAppSessionResponse;
  static deserializeBinaryFromReader(message: SettleAppSessionResponse, reader: jspb.BinaryReader): SettleAppSessionResponse;
}

export namespace SettleAppSessionResponse {
  export type AsObject = {
    contractAddress: string,
  }
}

export class EndAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getWinnerIndex(): string;
  setWinnerIndex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EndAppSessionRequest): EndAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndAppSessionRequest;
  static deserializeBinaryFromReader(message: EndAppSessionRequest, reader: jspb.BinaryReader): EndAppSessionRequest;
}

export namespace EndAppSessionRequest {
  export type AsObject = {
    sessionId: string,
    tokenType: string,
    tokenAddress: string,
    winnerIndex: string,
  }
}

export class RegisterOracleRequest extends jspb.Message {
  getOracleAddress(): string;
  setOracleAddress(value: string): void;

  getAbi(): string;
  setAbi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterOracleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterOracleRequest): RegisterOracleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterOracleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterOracleRequest;
  static deserializeBinaryFromReader(message: RegisterOracleRequest, reader: jspb.BinaryReader): RegisterOracleRequest;
}

export namespace RegisterOracleRequest {
  export type AsObject = {
    oracleAddress: string,
    abi: string,
  }
}

export class ResolveOracleRequest extends jspb.Message {
  getOracleAddress(): string;
  setOracleAddress(value: string): void;

  getTokenType(): string;
  setTokenType(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveOracleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveOracleRequest): ResolveOracleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveOracleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveOracleRequest;
  static deserializeBinaryFromReader(message: ResolveOracleRequest, reader: jspb.BinaryReader): ResolveOracleRequest;
}

export namespace ResolveOracleRequest {
  export type AsObject = {
    oracleAddress: string,
    tokenType: string,
    tokenAddress: string,
  }
}

