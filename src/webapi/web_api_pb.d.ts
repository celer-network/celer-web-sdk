// package: webrpc
// file: web_api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class OpenChannelRequest extends jspb.Message {
  getTokenType(): number;
  setTokenType(value: number): void;

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
    tokenType: number,
    tokenAddress: string,
    amountWei: string,
    peerAmountWei: string,
  }
}

export class ChannelID extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelID.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelID): ChannelID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelID;
  static deserializeBinaryFromReader(message: ChannelID, reader: jspb.BinaryReader): ChannelID;
}

export namespace ChannelID {
  export type AsObject = {
    channelId: string,
  }
}

export class DepositRequest extends jspb.Message {
  getTokenType(): number;
  setTokenType(value: number): void;

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
    tokenType: number,
    tokenAddress: string,
    amountWei: string,
  }
}

export class TxHash extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxHash.AsObject;
  static toObject(includeInstance: boolean, msg: TxHash): TxHash.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxHash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxHash;
  static deserializeBinaryFromReader(message: TxHash, reader: jspb.BinaryReader): TxHash;
}

export namespace TxHash {
  export type AsObject = {
    txHash: string,
  }
}

export class WithdrawRequest extends jspb.Message {
  getTokenType(): number;
  setTokenType(value: number): void;

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
    tokenType: number,
    tokenAddress: string,
    amountWei: string,
  }
}

export class GetBalanceRequest extends jspb.Message {
  getTokenType(): number;
  setTokenType(value: number): void;

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
    tokenType: number,
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
  getSessionId(): string;
  setSessionId(value: string): void;

  getOnChainDeployed(): boolean;
  setOnChainDeployed(value: boolean): void;

  getOnChainAddress(): string;
  setOnChainAddress(value: string): void;

  getArgsForQueryResult(): Uint8Array | string;
  getArgsForQueryResult_asU8(): Uint8Array;
  getArgsForQueryResult_asB64(): string;
  setArgsForQueryResult(value: Uint8Array | string): void;

  getTimeout(): number;
  setTimeout(value: number): void;

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
    sessionId: string,
    onChainDeployed: boolean,
    onChainAddress: string,
    argsForQueryResult: Uint8Array | string,
    timeout: number,
  }
}

export class SendConditionalPaymentRequest extends jspb.Message {
  getTokenType(): number;
  setTokenType(value: number): void;

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
    tokenType: number,
    tokenAddress: string,
    amountWei: string,
    destination: string,
    condition?: Condition.AsObject,
  }
}

export class PaymentID extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentID.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentID): PaymentID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentID;
  static deserializeBinaryFromReader(message: PaymentID, reader: jspb.BinaryReader): PaymentID;
}

export namespace PaymentID {
  export type AsObject = {
    paymentId: string,
  }
}

export class PaymentInfo extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  getTokenAddress(): string;
  setTokenAddress(value: string): void;

  getAmountWei(): string;
  setAmountWei(value: string): void;

  getPaymentJson(): string;
  setPaymentJson(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentInfo): PaymentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentInfo;
  static deserializeBinaryFromReader(message: PaymentInfo, reader: jspb.BinaryReader): PaymentInfo;
}

export namespace PaymentInfo {
  export type AsObject = {
    paymentId: string,
    sender: string,
    receiver: string,
    tokenAddress: string,
    amountWei: string,
    paymentJson: string,
    status: number,
  }
}

export class CreateAppSessionOnDeployedContractRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getBin(): string;
  setBin(value: string): void;

  getNonceSeed(): string;
  setNonceSeed(value: string): void;

  clearParticipantsList(): void;
  getParticipantsList(): Array<string>;
  setParticipantsList(value: Array<string>): void;
  addParticipants(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppSessionOnDeployedContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppSessionOnDeployedContractRequest): CreateAppSessionOnDeployedContractRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppSessionOnDeployedContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppSessionOnDeployedContractRequest;
  static deserializeBinaryFromReader(message: CreateAppSessionOnDeployedContractRequest, reader: jspb.BinaryReader): CreateAppSessionOnDeployedContractRequest;
}

export namespace CreateAppSessionOnDeployedContractRequest {
  export type AsObject = {
    address: string,
    bin: string,
    nonceSeed: string,
    participantsList: Array<string>,
  }
}

export class SessionID extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionID.AsObject;
  static toObject(includeInstance: boolean, msg: SessionID): SessionID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionID;
  static deserializeBinaryFromReader(message: SessionID, reader: jspb.BinaryReader): SessionID;
}

export namespace SessionID {
  export type AsObject = {
    sessionId: string,
  }
}

export class DisputeInfo extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getSeqNum(): number;
  setSeqNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisputeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DisputeInfo): DisputeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisputeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisputeInfo;
  static deserializeBinaryFromReader(message: DisputeInfo, reader: jspb.BinaryReader): DisputeInfo;
}

export namespace DisputeInfo {
  export type AsObject = {
    sessionId: string,
    seqNum: number,
  }
}

export class SignOutgoingStateRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignOutgoingStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignOutgoingStateRequest): SignOutgoingStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignOutgoingStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignOutgoingStateRequest;
  static deserializeBinaryFromReader(message: SignOutgoingStateRequest, reader: jspb.BinaryReader): SignOutgoingStateRequest;
}

export namespace SignOutgoingStateRequest {
  export type AsObject = {
    sessionId: string,
    state: Uint8Array | string,
  }
}

export class SignedState extends jspb.Message {
  getSignedState(): Uint8Array | string;
  getSignedState_asU8(): Uint8Array;
  getSignedState_asB64(): string;
  setSignedState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedState.AsObject;
  static toObject(includeInstance: boolean, msg: SignedState): SignedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedState;
  static deserializeBinaryFromReader(message: SignedState, reader: jspb.BinaryReader): SignedState;
}

export namespace SignedState {
  export type AsObject = {
    signedState: Uint8Array | string,
  }
}

export class ValidateAckRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getEnvelope(): Uint8Array | string;
  getEnvelope_asU8(): Uint8Array;
  getEnvelope_asB64(): string;
  setEnvelope(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAckRequest): ValidateAckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateAckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAckRequest;
  static deserializeBinaryFromReader(message: ValidateAckRequest, reader: jspb.BinaryReader): ValidateAckRequest;
}

export namespace ValidateAckRequest {
  export type AsObject = {
    sessionId: string,
    envelope: Uint8Array | string,
  }
}

export class BoolValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolValue.AsObject;
  static toObject(includeInstance: boolean, msg: BoolValue): BoolValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoolValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolValue;
  static deserializeBinaryFromReader(message: BoolValue, reader: jspb.BinaryReader): BoolValue;
}

export namespace BoolValue {
  export type AsObject = {
    value: boolean,
  }
}

export class ProcessReceivedStateRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getEnvelope(): Uint8Array | string;
  getEnvelope_asU8(): Uint8Array;
  getEnvelope_asB64(): string;
  setEnvelope(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessReceivedStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessReceivedStateRequest): ProcessReceivedStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessReceivedStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessReceivedStateRequest;
  static deserializeBinaryFromReader(message: ProcessReceivedStateRequest, reader: jspb.BinaryReader): ProcessReceivedStateRequest;
}

export namespace ProcessReceivedStateRequest {
  export type AsObject = {
    sessionId: string,
    envelope: Uint8Array | string,
  }
}

export class ProcessReceivedStateResponse extends jspb.Message {
  getDecodedState(): Uint8Array | string;
  getDecodedState_asU8(): Uint8Array;
  getDecodedState_asB64(): string;
  setDecodedState(value: Uint8Array | string): void;

  getPreparedAck(): Uint8Array | string;
  getPreparedAck_asU8(): Uint8Array;
  getPreparedAck_asB64(): string;
  setPreparedAck(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessReceivedStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessReceivedStateResponse): ProcessReceivedStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessReceivedStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessReceivedStateResponse;
  static deserializeBinaryFromReader(message: ProcessReceivedStateResponse, reader: jspb.BinaryReader): ProcessReceivedStateResponse;
}

export namespace ProcessReceivedStateResponse {
  export type AsObject = {
    decodedState: Uint8Array | string,
    preparedAck: Uint8Array | string,
  }
}

export class SettleAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getStateProof(): Uint8Array | string;
  getStateProof_asU8(): Uint8Array;
  getStateProof_asB64(): string;
  setStateProof(value: Uint8Array | string): void;

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
    stateProof: Uint8Array | string,
  }
}

export class Address extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    address: string,
  }
}

export class GetBooleanResultForAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getQuery(): Uint8Array | string;
  getQuery_asU8(): Uint8Array;
  getQuery_asB64(): string;
  setQuery(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBooleanResultForAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBooleanResultForAppSessionRequest): GetBooleanResultForAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBooleanResultForAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBooleanResultForAppSessionRequest;
  static deserializeBinaryFromReader(message: GetBooleanResultForAppSessionRequest, reader: jspb.BinaryReader): GetBooleanResultForAppSessionRequest;
}

export namespace GetBooleanResultForAppSessionRequest {
  export type AsObject = {
    sessionId: string,
    query: Uint8Array | string,
  }
}

export class BooleanResult extends jspb.Message {
  getFinalized(): boolean;
  setFinalized(value: boolean): void;

  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanResult.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanResult): BooleanResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BooleanResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanResult;
  static deserializeBinaryFromReader(message: BooleanResult, reader: jspb.BinaryReader): BooleanResult;
}

export namespace BooleanResult {
  export type AsObject = {
    finalized: boolean,
    result: boolean,
  }
}

export class ApplyActionForAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getAction(): Uint8Array | string;
  getAction_asU8(): Uint8Array;
  getAction_asB64(): string;
  setAction(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyActionForAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyActionForAppSessionRequest): ApplyActionForAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyActionForAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyActionForAppSessionRequest;
  static deserializeBinaryFromReader(message: ApplyActionForAppSessionRequest, reader: jspb.BinaryReader): ApplyActionForAppSessionRequest;
}

export namespace ApplyActionForAppSessionRequest {
  export type AsObject = {
    sessionId: string,
    action: Uint8Array | string,
  }
}

export class SettleFinalizedTime extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleFinalizedTime.AsObject;
  static toObject(includeInstance: boolean, msg: SettleFinalizedTime): SettleFinalizedTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleFinalizedTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleFinalizedTime;
  static deserializeBinaryFromReader(message: SettleFinalizedTime, reader: jspb.BinaryReader): SettleFinalizedTime;
}

export namespace SettleFinalizedTime {
  export type AsObject = {
    time: number,
  }
}

export class ActionDeadline extends jspb.Message {
  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionDeadline.AsObject;
  static toObject(includeInstance: boolean, msg: ActionDeadline): ActionDeadline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionDeadline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionDeadline;
  static deserializeBinaryFromReader(message: ActionDeadline, reader: jspb.BinaryReader): ActionDeadline;
}

export namespace ActionDeadline {
  export type AsObject = {
    deadline: number,
  }
}

export class AppSessionStatus extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppSessionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AppSessionStatus): AppSessionStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppSessionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppSessionStatus;
  static deserializeBinaryFromReader(message: AppSessionStatus, reader: jspb.BinaryReader): AppSessionStatus;
}

export namespace AppSessionStatus {
  export type AsObject = {
    status: number,
  }
}

export class GetStateForAppSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getKey(): number;
  setKey(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStateForAppSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStateForAppSessionRequest): GetStateForAppSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStateForAppSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStateForAppSessionRequest;
  static deserializeBinaryFromReader(message: GetStateForAppSessionRequest, reader: jspb.BinaryReader): GetStateForAppSessionRequest;
}

export namespace GetStateForAppSessionRequest {
  export type AsObject = {
    sessionId: string,
    key: number,
  }
}

export class AppSessionState extends jspb.Message {
  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppSessionState.AsObject;
  static toObject(includeInstance: boolean, msg: AppSessionState): AppSessionState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppSessionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppSessionState;
  static deserializeBinaryFromReader(message: AppSessionState, reader: jspb.BinaryReader): AppSessionState;
}

export namespace AppSessionState {
  export type AsObject = {
    state: Uint8Array | string,
  }
}

export class AppSessionSeqNum extends jspb.Message {
  getSeqNum(): number;
  setSeqNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppSessionSeqNum.AsObject;
  static toObject(includeInstance: boolean, msg: AppSessionSeqNum): AppSessionSeqNum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppSessionSeqNum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppSessionSeqNum;
  static deserializeBinaryFromReader(message: AppSessionSeqNum, reader: jspb.BinaryReader): AppSessionSeqNum;
}

export namespace AppSessionSeqNum {
  export type AsObject = {
    seqNum: number,
  }
}

