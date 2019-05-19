import isNode from 'detect-node';
import { grpc } from '@improbable-eng/grpc-web';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { WebApi } from './webapi/web_api_pb_service';
import {
  ChannelID,
  Condition as ConditionMessage,
  DepositRequest,
  TxHash,
  GetBalanceRequest,
  GetBalanceResponse,
  OpenChannelRequest,
  SendConditionalPaymentRequest,
  PaymentInfo as PaymentInfoMessage,
  PaymentID,
  WithdrawRequest,
  CreateAppSessionOnDeployedContractRequest,
  SessionID,
  DisputeInfo as DisputeInfoMessage,
  SettleAppSessionRequest,
  SignOutgoingStateRequest,
  SignedState,
  ValidateAckRequest,
  ProcessReceivedStateResponse,
  BoolValue,
  Address,
  BooleanResult as BooleanResultMessage,
  GetBooleanResultForAppSessionRequest,
  ApplyActionForAppSessionRequest,
  SettleFinalizedTime,
  ActionDeadline,
  AppSessionStatus,
  AppSessionState,
  AppSessionSeqNum,
  GetStateForAppSessionRequest
} from './webapi/web_api_pb';

const ZERO_ADDRESS = '0';

enum TokenType {
  ETH = 1,
  ERC20 = 2
}

export interface Balance {
  /** The maximum amount that can be sent off-chain, in wei */
  freeBalance: string;
  /** The amount locked in pending conditional payments, in wei */
  lockedBalance: string;
  /** The maximum amount that can be received off-chain, in wei */
  receivingCapacity: string;
}

export interface PaymentInfo {
  /** The payment ID */
  paymentId: string;
  /** The address of the sender */
  sender: string;
  /** The address of the receiver */
  receiver: string;
  /** The address of the ERC-20 token */
  tokenAddress: string;
  /** The payment amount, in wei */
  amountWei: string;
  /** The supplemental payment JSON */
  paymentJson: string;
  /** The status of the payment */
  status: number;
}

export interface Condition {
  /** The app session ID */
  sessionID: string;
  /** Whether the condition depends on an on-chain deployed contract */
  onChainDeployed: boolean;
  /** The address of the deployed contract */
  onChainAddress: string;
  /** The arguments for the on-chain `queryResult` call */
  argsForQueryResult: Uint8Array;
  /** The duration after which the condition will expire */
  timeout: number;
}

export interface AppInfo {
  /** The hex-encoded binary of the app contract */
  bin: string;
  /** The address the deployed app contract */
  address: string;
}

export interface DisputeInfo {
  /** The app session ID */
  sessionID: string;
  /** The latest sequence number */
  seqNum: number;
}

export interface ProcessReceivedStateResult {
  /** The decoded state */
  decodedState: Uint8Array;
  /** The prepared ACK to be sent */
  preparedAck: Uint8Array;
}

export interface BooleanResult {
  /** Whether the app session is finalized */
  finalized: boolean;
  /** The boolean result */
  result: boolean;
}

export class Client {
  private host: string;

  constructor(host: string) {
    this.host = host;
    if (isNode) {
      grpc.setDefaultTransport(NodeHttpTransport());
    }
  }

  /**
   * Opens an ETH channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @param peerAmountWei - The amount to be deposited into the channel by the
   *     counterparty, in wei
   * @returns The channel ID
   */
  openEthChannel(amountWei: string, peerAmountWei: string): Promise<string> {
    return this.openChannel(
      TokenType.ETH,
      ZERO_ADDRESS,
      amountWei,
      peerAmountWei
    );
  }

  /**
   * Opens an ERC-20 token channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @param peerAmountWei - The amount to be deposited into the channel by the
   *     counterparty, in wei
   * @returns The channel ID
   */
  openErc20Channel(
    tokenAddress: string,
    amountWei: string,
    peerAmountWei: string
  ): Promise<string> {
    return this.openChannel(
      TokenType.ERC20,
      tokenAddress,
      amountWei,
      peerAmountWei
    );
  }

  /**
   * Deposits into an ETH channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @returns The hash of the deposit transaction
   */
  depositEth(amountWei: string): Promise<string> {
    return this.deposit(TokenType.ETH, ZERO_ADDRESS, amountWei);
  }

  /**
   * Deposits into an ERC-20 token channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @returns The hash of the deposit transaction
   */
  depositErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.deposit(TokenType.ERC20, tokenAddress, amountWei);
  }

  /**
   * Withdraws from an ETH channel.
   *
   * @param amountWei - The amount to be withdrawn from the channel, in wei
   * @returns The hash of the withdrawal transaction
   */
  withdrawEth(amountWei: string): Promise<string> {
    return this.withdraw(TokenType.ETH, ZERO_ADDRESS, amountWei);
  }

  /**
   * Withdraws from an ERC-20 token channel.
   *
   * @param amountWei - The amount to be withdrawn from the channel, in wei
   * @returns The hash of the withdrawal transaction
   */
  withdrawErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.withdraw(TokenType.ERC20, tokenAddress, amountWei);
  }

  /**
   * Gets the balance of an ETH channel.
   *
   * @returns The balance information
   */
  getEthBalance(): Promise<Balance> {
    return this.getBalance(TokenType.ETH, ZERO_ADDRESS);
  }

  /**
   * Gets the balance of an ERC-20 token channel.
   *
   * @param tokenAddress - The address of the ERC-20 token contract
   * @returns The balance information
   */
  getErc20Balance(tokenAddress: string): Promise<Balance> {
    return this.getBalance(TokenType.ERC20, tokenAddress);
  }

  /**
   * Sends an off-chain ETH payment.
   *
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @returns The payment ID
   */
  sendEth(amountWei: string, destination: string): Promise<string> {
    return this.sendConditionalPayment(
      TokenType.ETH,
      ZERO_ADDRESS,
      amountWei,
      destination
    );
  }

  /**
   * Sends an off-chain ERC-20 token payment.
   *
   * @param tokenAddress - The address of the ERC-20 token contract
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @returns The payment ID
   */
  sendErc20(
    tokenAddress: string,
    amountWei: string,
    destination: string
  ): Promise<string> {
    return this.sendConditionalPayment(
      TokenType.ERC20,
      tokenAddress,
      amountWei,
      destination
    );
  }

  /**
   * Sends an off-chain ETH payment with a condition.
   *
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @param condition - The condition for the payment to be issued
   * @returns The payment ID
   */
  sendEthWithCondition(
    amountWei: string,
    destination: string,
    condition: Condition
  ): Promise<string> {
    return this.sendConditionalPayment(
      TokenType.ETH,
      ZERO_ADDRESS,
      amountWei,
      destination,
      condition
    );
  }

  /**
   * Sends an off-chain ERC-20 token payment with a condition.
   *
   * @param tokenAddress - The address of the ERC-20 token contract
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @param condition - The condition for the payment to be issued
   * @returns The payment ID
   */
  sendErc20WithCondition(
    tokenAddress: string,
    amountWei: string,
    destination: string,
    condition: Condition
  ): Promise<string> {
    return this.sendConditionalPayment(
      TokenType.ERC20,
      tokenAddress,
      amountWei,
      destination,
      condition
    );
  }

  /**
   * Subscribe to incoming payments.
   *
   * @param callback - The callback to handle incoming payments.
   */
  subscribeIncomingPayments(
    callback: (info: PaymentInfo) => void
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        grpc.invoke(WebApi.SubscribeIncomingPayments, {
          request: new Empty(),
          host: this.host,
          onEnd: (
            code: grpc.Code,
            msg: string | undefined,
            trailers: grpc.Metadata
          ) => {
            if (code !== grpc.Code.OK) {
              console.log(
                'Subscribe incoming payments gRPC error:',
                code,
                msg,
                trailers
              );
            }
          },
          onMessage: (message: PaymentInfoMessage) => {
            callback({
              paymentId: message.getPaymentId(),
              sender: message.getSender(),
              receiver: message.getReceiver(),
              tokenAddress: message.getTokenAddress(),
              amountWei: message.getAmountWei(),
              paymentJson: message.getPaymentJson(),
              status: message.getStatus()
            });
          }
        });
      } catch (e) {
        reject(e);
      }
      resolve();
    });
  }

  /**
   * Confirms an outgoing payment.
   *
   * @param paymentID - The payment ID
   */
  confirmOutgoingPayment(paymentID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new PaymentID();
      request.setPaymentId(paymentID);
      try {
        grpc.invoke(WebApi.ConfirmOutgoingPayment, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Rejects an incoming payment.
   *
   * @param paymentID - The payment ID
   */
  rejectIncomingPayment(paymentID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new PaymentID();
      request.setPaymentId(paymentID);
      try {
        grpc.invoke(WebApi.RejectIncomingPayment, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Settles an incoming payment on-chain.
   *
   * @param paymentID - The payment ID
   */
  settleIncomingPayment(paymentID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new PaymentID();
      request.setPaymentId(paymentID);
      try {
        grpc.invoke(WebApi.SettleIncomingPayment, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Creates an app session based on a deployed contract.
   *
   * @param appInfo - The information about the app
   * @param stateValidator - A function returning whether a state sent by the
   *     counterparty is valid
   * @returns The session ID
   */
  createAppSessionOnDeployedContract(
    appInfo: AppInfo,
    nonceSeed: string,
    participants: string[]
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new CreateAppSessionOnDeployedContractRequest();
      request.setBin(appInfo.bin);
      request.setAddress(appInfo.address);
      request.setNonceSeed(nonceSeed);
      request.setParticipantsList(participants);
      try {
        grpc.invoke(WebApi.CreateAppSessionOnDeployedContract, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: SessionID) => {
            resolve(response.getSessionId());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Subscribe to app session disputes.
   *
   * @param sessionID - The session ID
   * @param callback - The callback to handle disputes
   */
  subscribeAppSessionDisputes(
    sessionID: string,
    callback: (info: DisputeInfo) => void
  ) {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.SubscribeAppSessionDisputes, {
          request,
          host: this.host,
          onEnd: (
            code: grpc.Code,
            msg: string | undefined,
            trailers: grpc.Metadata
          ) => {
            if (code !== grpc.Code.OK) {
              console.log(
                'Subscribe app session disputes gRPC error:',
                code,
                msg,
                trailers
              );
            }
          },
          onMessage: (message: DisputeInfoMessage) => {
            callback({
              sessionID: message.getSessionId(),
              seqNum: message.getSeqNum()
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  }

  /**
   * Signs an outgoing app state.
   *
   * @param sessionID - The ID for the app session
   * @param state - The state represented in a byte array
   * @returns The signed state ready to be sent
   */
  signOutgoingState(sessionID: string, state: Uint8Array): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const request = new SignOutgoingStateRequest();
      request.setSessionId(sessionID);
      request.setState(state);
      try {
        grpc.invoke(WebApi.SignOutgoingState, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: SignedState) => {
            resolve(response.getSignedState_asU8());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Validates a received ACK for a sent app state.
   *
   * @param sessionID - The ID for the app session
   * @param envelope - The envelope containing the ACK message
   * @returns The signed state ready to be sent
   */
  validateAck(sessionID: string, envelope: Uint8Array): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request = new ValidateAckRequest();
      request.setSessionId(sessionID);
      request.setEnvelope(envelope);
      try {
        grpc.invoke(WebApi.ValidateAck, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: BoolValue) => {
            resolve(response.getValue());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Processes a received app state message.
   *
   * @param sessionID - The ID for the app session
   * @param envelope - The envelope containing the state message.
   * @returns The decoded state and the prepared ACK to be sent.
   */
  processReceivedState(
    sessionID: string,
    envelope: Uint8Array
  ): Promise<ProcessReceivedStateResult> {
    return new Promise((resolve, reject) => {
      const request = new ValidateAckRequest();
      request.setSessionId(sessionID);
      request.setEnvelope(envelope);
      try {
        grpc.invoke(WebApi.ProcessReceivedState, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: ProcessReceivedStateResponse) => {
            resolve({
              decodedState: response.getDecodedState_asU8(),
              preparedAck: response.getPreparedAck_asU8()
            });
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Settles a app session by submitting the latest state proof on-chain.
   *
   * @param sessionID - The ID for the app session
   */
  settleAppSession(sessionID: string, stateProof: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SettleAppSessionRequest();
      request.setSessionId(sessionID);
      request.setStateProof(stateProof);
      try {
        grpc.invoke(WebApi.SettleAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Ends a app session
   *
   * @param sessionID - The ID for the app session
   */
  endAppSession(sessionID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.EndAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Gets the address of the deployed app contract.
   *
   * @param sessionID - The ID for the app session
   * @returns The address.
   */
  getDeployedAddressForAppSession(sessionID: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.GetDeployedAddressForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: Address) => {
            resolve(response.getAddress());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getResult` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @param query - The query bytes
   * @returns The boolean result
   */
  getBooleanResultForAppSession(
    sessionID: string,
    query: Uint8Array
  ): Promise<BooleanResult> {
    return new Promise((resolve, reject) => {
      const request = new GetBooleanResultForAppSessionRequest();
      request.setSessionId(sessionID);
      request.setQuery(query);
      try {
        grpc.invoke(WebApi.GetBooleanResultForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: BooleanResultMessage) => {
            resolve({
              finalized: response.getFinalized(),
              result: response.getResult()
            });
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Sends `applyAction` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @param action - The action bytes
   */
  applyActionForAppSession(
    sessionID: string,
    action: Uint8Array
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new ApplyActionForAppSessionRequest();
      request.setSessionId(sessionID);
      request.setAction(action);
      try {
        grpc.invoke(WebApi.ApplyActionForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Sends `finalizeOnActionTimeout` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   */
  finalizeOnActionTimeoutForAppSession(sessionID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.FinalizeOnActionTimeoutForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: _ => {
            resolve();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getSettleFinalizedTime` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @returns The block number at which the settlement will be finalized
   */
  getSettleFinalizedTimeForAppSession(sessionID: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.GetSettleFinalizedTimeForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: SettleFinalizedTime) => {
            resolve(response.getTime());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getActionDeadline` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @returns The action deadline
   */
  getActionDeadlineForAppSession(sessionID: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.GetActionDeadlineForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: ActionDeadline) => {
            resolve(response.getDeadline());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getStatus` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @returns The status of an app session
   */
  getStatusForAppSession(sessionID: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.GetStatusForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: AppSessionStatus) => {
            resolve(response.getStatus());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getState` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @param key - The key of the state
   * @returns The status of an app session
   */
  getStateForAppSession(sessionID: string, key: number): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const request = new GetStateForAppSessionRequest();
      request.setSessionId(sessionID);
      request.setKey(key);
      try {
        grpc.invoke(WebApi.GetStateForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: AppSessionState) => {
            resolve(response.getState_asU8());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Calls `getSeqNum` on-chain for an app session.
   *
   * @param sessionID - The ID for the app session
   * @returns The current sequence number of the app session
   */
  getSeqNumForAppSession(sessionID: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const request = new SessionID();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.GetSeqNumForAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: AppSessionSeqNum) => {
            resolve(response.getSeqNum());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private openChannel(
    tokenType: TokenType,
    tokenAddress: string,
    amountWei: string,
    peerAmountWei: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new OpenChannelRequest();
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      request.setAmountWei(amountWei);
      request.setPeerAmountWei(peerAmountWei);
      try {
        grpc.invoke(WebApi.OpenChannel, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: ChannelID) => {
            resolve(response.getChannelId());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private deposit(
    tokenType: TokenType,
    tokenAddress: string,
    amountWei: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new DepositRequest();
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      request.setAmountWei(amountWei);
      try {
        grpc.invoke(WebApi.Deposit, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: TxHash) => {
            resolve(response.getTxHash());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private withdraw(
    tokenType: TokenType,
    tokenAddress: string,
    amountWei: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new WithdrawRequest();
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      request.setAmountWei(amountWei);
      try {
        grpc.invoke(WebApi.Withdraw, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: TxHash) => {
            resolve(response.getTxHash());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private getBalance(
    tokenType: TokenType,
    tokenAddress: string
  ): Promise<Balance> {
    return new Promise((resolve, reject) => {
      const request = new GetBalanceRequest();
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      try {
        grpc.invoke(WebApi.GetBalance, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: GetBalanceResponse) => {
            resolve({
              freeBalance: response.getFreeBalance(),
              lockedBalance: response.getLockedBalance(),
              receivingCapacity: response.getReceivingCapacity()
            });
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private sendConditionalPayment(
    tokenType: TokenType,
    tokenAddress: string,
    amountWei: string,
    destination: string,
    condition?: Condition
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new SendConditionalPaymentRequest();
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      request.setAmountWei(amountWei);
      request.setDestination(destination);
      if (condition) {
        const conditionMessage = new ConditionMessage();
        conditionMessage.setSessionId(condition.sessionID);
        conditionMessage.setOnChainDeployed(condition.onChainDeployed);
        conditionMessage.setOnChainAddress(condition.onChainAddress);
        conditionMessage.setArgsForQueryResult(condition.argsForQueryResult);
        conditionMessage.setTimeout(condition.timeout);
        request.setCondition(conditionMessage);
      }
      try {
        grpc.invoke(WebApi.SendConditionalPayment, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: PaymentID) => {
            resolve(response.getPaymentId());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private onEnd(
    reject: (reason: {
      code: grpc.Code;
      msg: string | undefined;
      trailers: grpc.Metadata;
    }) => void
  ): (
    code: grpc.Code,
    msg: string | undefined,
    trailers: grpc.Metadata
  ) => void {
    return (
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
    ) => {
      if (code !== grpc.Code.OK) {
        console.log('gRPC error: ', code, msg, trailers);
        reject({ code, msg, trailers });
      }
    };
  }
}
