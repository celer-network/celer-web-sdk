import { grpc } from '@improbable-eng/grpc-web';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import isNode from 'detect-node';

import {
  Condition as ConditionMessage,
  DepositRequest,
  DepositResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  OpenChannelRequest,
  OpenChannelResponse,
  SendConditionalPaymentRequest,
  SendConditionalPaymentResponse,
  WithdrawRequest,
  WithdrawResponse,
  CreateAppSessionRequest,
  CreateAppSessionResponse,
  SettleAppSessionRequest,
  SettleAppSessionResponse,
  EndAppSessionRequest,
  RegisterOracleRequest,
  ResolveOracleRequest,
  StateMessage,
  SendStateRequest,
  AckStateRequest,
  ReceiveStatesRequest
} from './webapi/web_api_pb';
import { WebApi } from './webapi/web_api_pb_service';

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
    return this.openChannel('0', '0', amountWei, peerAmountWei);
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
    return this.openChannel('1', tokenAddress, amountWei, peerAmountWei);
  }

  /**
   * Deposits into an ETH channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @returns The hash of the deposit transaction
   */
  depositEth(amountWei: string): Promise<string> {
    return this.deposit('0', '0', amountWei);
  }

  /**
   * Deposits into an ERC-20 token channel.
   *
   * @param amountWei - The amount to be deposited into the channel, in wei
   * @returns The hash of the deposit transaction
   */
  depositErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.deposit('1', tokenAddress, amountWei);
  }

  /**
   * Withdraws from an ETH channel.
   *
   * @param amountWei - The amount to be withdrawn from the channel, in wei
   * @returns The hash of the withdrawal transaction (currently unimplemented)
   */
  withdrawEth(amountWei: string): Promise<string> {
    return this.withdraw('0', '0', amountWei);
  }

  /**
   * Withdraws from an ERC-20 token channel.
   *
   * @param amountWei - The amount to be withdrawn from the channel, in wei
   * @returns The hash of the withdrawal transaction (currently unimplemented)
   */
  withdrawErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.withdraw('1', tokenAddress, amountWei);
  }

  /**
   * Gets the balance of an ETH channel.
   *
   * @returns The balance information
   */
  getEthBalance(): Promise<Balance> {
    return this.getBalance('0', '0');
  }

  /**
   * Gets the balance of an ERC-20 token channel.
   *
   * @param tokenAddress - The address of the ERC-20 token contract
   * @returns The balance information
   */
  getErc20Balance(tokenAddress: string): Promise<Balance> {
    return this.getBalance('1', tokenAddress);
  }

  /**
   * Sends an off-chain ETH payment.
   *
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @returns The payment ID (currently unimplemented)
   */
  sendEth(amountWei: string, destination: string): Promise<string> {
    return this.sendConditionalPayment('0', '0', amountWei, destination);
  }

  /**
   * Sends an off-chain ERC-20 token payment.
   *
   * @param tokenAddress - The address of the ERC-20 token contract
   * @param amountWei - The amount to be sent, in wei
   * @param destination - The ETH address of the recipient
   * @returns The payment ID (currently unimplemented)
   */
  sendErc20(
    tokenAddress: string,
    amountWei: string,
    destination: string
  ): Promise<string> {
    return this.sendConditionalPayment(
      '1',
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
   * @returns The payment ID (currently unimplemented)
   */
  sendEthWithCondition(
    amountWei: string,
    destination: string,
    condition: Condition
  ): Promise<string> {
    return this.sendConditionalPayment(
      '0',
      '0',
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
   * @returns The payment ID (currently unimplemented)
   */
  sendErc20WithCondition(
    tokenAddress: string,
    amountWei: string,
    destination: string,
    condition: Condition
  ): Promise<string> {
    return this.sendConditionalPayment(
      '1',
      tokenAddress,
      amountWei,
      destination,
      condition
    );
  }

  /**
   * Creates an cApp session.
   *
   * @param appInfo - The information about the cApp
   * @param stateValidator - A function returning whether a state sent by the
   *     counterparty is valid
   * @returns The session ID
   */
  createAppSession(
    appInfo: AppInfo,
    stateValidator: (state: Uint8Array) => boolean
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new CreateAppSessionRequest();
      request.setBin(appInfo.bin);
      request.setAbi(appInfo.abi);
      request.setConstructor(appInfo.constructor);
      request.setNonce(appInfo.nonce);
      try {
        grpc.invoke(WebApi.CreateAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: CreateAppSessionResponse) => {
            const sessionID = response.getSessionId();
            const receiveStatesRequest = new ReceiveStatesRequest();
            receiveStatesRequest.setSessionId(sessionID);
            const receiveGrpc = grpc.invoke(WebApi.ReceiveStates, {
              request: receiveStatesRequest,
              host: this.host,
              onEnd: _ => {},
              onMessage: (message: StateMessage) => {
                const seq = message.getSeq();
                const valid = stateValidator(message.getState_asU8());
                if (valid) {
                  const ackStateRequest = new AckStateRequest();
                  ackStateRequest.setSessionId(sessionID);
                  ackStateRequest.setSeq(seq);
                  grpc.invoke(WebApi.AckState, {
                    request: ackStateRequest,
                    host: this.host,
                    onEnd: (code, _message, _trailers) => {
                      if (code !== grpc.Code.OK) {
                        receiveGrpc.close();
                      }
                    },
                    onMessage: _ => {}
                  });
                }
              }
            });
            resolve(sessionID);
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Sends a cApp state.
   *
   * @param sessionID - The ID for the cApp session
   * @param destination - The ETH address of the counterparty
   * @param state - The state represented in a byte array
   */
  sendState(
    sessionID: string,
    destination: string,
    state: Uint8Array
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SendStateRequest();
      request.setSessionId(sessionID);
      request.setDestination(destination);
      request.setState(state);
      try {
        grpc.invoke(WebApi.SendState, {
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
   * Settles a cApp session by deploying the cApp contract on-chain.
   *
   * @param sessionID - The ID for the cApp session
   * @returns The address of the deployed cApp contract
   */
  settleAppSession(sessionID: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new SettleAppSessionRequest();
      request.setSessionId(sessionID);
      try {
        grpc.invoke(WebApi.SettleAppSession, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: SettleAppSessionResponse) => {
            resolve(response.getContractAddress());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Ends a cApp session and resolves all conditional payments in ETH associated
   * with the session.
   *
   * @param sessionID - The ID for the cApp session
   * @param winnerIndex - The index of the winner
   */
  endAppSessionForEth(sessionID: string, winnerIndex: string): Promise<void> {
    return this.endAppSession(sessionID, '0', '0', winnerIndex);
  }

  /**
   * Ends a cApp session and resolves all conditional payments in an ERC-20
   * token associated with the session.
   *
   * @param sessionID - The ID for the cApp session
   * @param tokenAddress - The address of the ERC-20 token contract
   * @param winnerIndex - The index of the winner
   */
  endAppSessionForErc20(
    sessionID: string,
    tokenAddress: string,
    winnerIndex: string
  ): Promise<void> {
    return this.endAppSession(sessionID, '1', tokenAddress, winnerIndex);
  }

  /**
   * Registers an on-chain oracle
   *
   * @param oracleAddress - The address of the oracle contract
   * @param abi - The ABI of the oracle contract
   */
  registerOracle(oracleAddress: string, abi: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new RegisterOracleRequest();
      request.setOracleAddress(oracleAddress);
      request.setAbi(abi);
      try {
        grpc.invoke(WebApi.RegisterOracle, {
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
   * Resolves all conditional payments in ETH associated with an on-chain oracle
   *
   * @param oracleAddress - The address of the oracle contract
   */
  resolveOracleForEth(oracleAddress: string): Promise<void> {
    return this.resolveOracle(oracleAddress, '0', '0');
  }

  /**
   * Resolves all conditional payments in an ERC-20 token associated with an
   * on-chain oracle
   *
   * @param oracleAddress - The address of the oracle contract
   * @param tokenAddress - The address of the ERC-20 token contract
   */
  resolveOracleForErc20(
    oracleAddress: string,
    tokenAddress: string
  ): Promise<void> {
    return this.resolveOracle(oracleAddress, '1', tokenAddress);
  }

  private openChannel(
    tokenType: string,
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
          onMessage: (response: OpenChannelResponse) => {
            resolve(response.getChannelId());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private deposit(
    tokenType: string,
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
          onMessage: (response: DepositResponse) => {
            resolve(response.getTxHash());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private withdraw(
    tokenType: string,
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
          onMessage: (response: WithdrawResponse) => {
            resolve(response.getTxHash());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private getBalance(
    tokenType: string,
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
    tokenType: string,
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
        conditionMessage.setDeadline(condition.deadline);
        conditionMessage.setSessionId(condition.sessionID);
        conditionMessage.setArgsForIsFinalized(condition.argsForIsFinalized);
        conditionMessage.setArgsForQueryResult(condition.argsForQueryResult);
        conditionMessage.setOnChainDeployed(condition.onChainDeployed);
        request.setCondition(conditionMessage);
      }
      try {
        grpc.invoke(WebApi.SendConditionalPayment, {
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: SendConditionalPaymentResponse) => {
            resolve(response.getPaymentId());
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  private endAppSession(
    sessionID: string,
    tokenType: string,
    tokenAddress: string,
    winnerIndex: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new EndAppSessionRequest();
      request.setSessionId(sessionID);
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      request.setWinnerIndex(winnerIndex);
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

  private resolveOracle(
    oracleAddress: string,
    tokenType: string,
    tokenAddress: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new ResolveOracleRequest();
      request.setOracleAddress(oracleAddress);
      request.setTokenType(tokenType);
      request.setTokenAddress(tokenAddress);
      try {
        grpc.invoke(WebApi.ResolveOracle, {
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
        console.log('gRPC error:', code, msg, trailers);
        reject({ code, msg, trailers });
      }
    };
  }
}

export interface Balance {
  /** The maximum amount that can be sent off-chain, in wei */
  freeBalance: string;
  /** The amount locked in pending conditional payments, in wei */
  lockedBalance: string;
  /** The maximum amount that can be received off-chain, in wei */
  receivingCapacity: string;
}

export interface Condition {
  /** The block number at which the condition will expire */
  deadline: string;
  /** The cApp session ID */
  sessionID: string;
  /** The arguments for the on-chain `isFinalized` call */
  argsForIsFinalized: Uint8Array;
  /** The arguments for the on-chain `queryResult` call */
  argsForQueryResult: Uint8Array;
  /** Whether the condition depends on an on-chain deployed contract */
  onChainDeployed: boolean;
}

export interface AppInfo {
  /** The hex-encoded binary of the cApp contract */
  bin: string;
  /** The ABI JSON string of the cApp contract */
  abi: string;
  /** The hex-encoded arguments for the constructor of the cApp contract */
  constructor: string;
  /** A unique ID for the cApp agreed upon by both parties */
  nonce: string;
}
