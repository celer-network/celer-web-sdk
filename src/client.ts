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

  openEthChannel(amountWei: string, peerAmountWei: string): Promise<string> {
    return this.openChannel('0', '0', amountWei, peerAmountWei);
  }

  openErc20Channel(
    tokenAddress: string,
    amountWei: string,
    peerAmountWei: string
  ): Promise<string> {
    return this.openChannel('1', tokenAddress, amountWei, peerAmountWei);
  }

  depositEth(amountWei: string): Promise<string> {
    return this.deposit('0', '0', amountWei);
  }

  depositErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.deposit('1', tokenAddress, amountWei);
  }

  withdrawEth(amountWei: string): Promise<string> {
    return this.withdraw('0', '0', amountWei);
  }

  withdrawErc20(tokenAddress: string, amountWei: string): Promise<string> {
    return this.withdraw('1', tokenAddress, amountWei);
  }

  getEthBalance(): Promise<Balance> {
    return this.getBalance('0', '0');
  }

  getErc20Balance(tokenAddress: string): Promise<Balance> {
    return this.getBalance('1', tokenAddress);
  }

  sendEth(amountWei: string, destination: string): Promise<string> {
    return this.sendConditionalPayment('0', '0', amountWei, destination);
  }

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

  endAppSessionForEth(sessionID: string, winnerIndex: string): Promise<void> {
    return this.endAppSession(sessionID, '0', '0', winnerIndex);
  }

  endAppSessionForErc20(
    sessionID: string,
    tokenAddress: string,
    winnerIndex: string
  ): Promise<void> {
    return this.endAppSession(sessionID, '1', tokenAddress, winnerIndex);
  }

  registerOracle(oracleAddress: string, abi: string) {
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

  resolveOracleForEth(oracleAddress: string): Promise<void> {
    return this.resolveOracle(oracleAddress, '0', '0');
  }

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
  freeBalance: string;
  lockedBalance: string;
  receivingCapacity: string;
}

export interface Condition {
  deadline: string;
  sessionID: string;
  argsForIsFinalized: Uint8Array;
  argsForQueryResult: Uint8Array;
  onChainDeployed: boolean;
}

export interface AppInfo {
  bin: string;
  abi: string;
  constructor: string;
  nonce: string;
}
