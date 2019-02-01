import { grpc } from '@improbable-eng/grpc-web';
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
  AckStateMessage,
  StateMessage,
  SendStateMessage
} from './webapi/web_api_pb';
import { WebApi } from './webapi/web_api_pb_service';

export class Client {
  private host: string;
  private stateSenderMap: Map<string, (message: SendStateMessage) => void>;

  constructor(host: string) {
    this.host = host;
    this.stateSenderMap = new Map();
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
          transport: grpc.WebsocketTransport(),
          request,
          host: this.host,
          onEnd: this.onEnd(reject),
          onMessage: (response: CreateAppSessionResponse) => {
            const sessionID = response.getSessionId();

            const sendClient = grpc.client(WebApi.SendStates, {
              host: this.host
            });
            sendClient.onEnd(() => sendClient.finishSend());
            this.stateSenderMap.set(sessionID, sendClient.send);

            const ackClient = grpc.client(WebApi.ReceiveStates, {
              host: this.host
            });
            ackClient.onEnd(() => ackClient.finishSend());
            ackClient.onMessage((message: StateMessage) => {
              const seq = message.getSeq();
              const valid = stateValidator(message.getState_asU8());
              if (valid) {
                const ack = new AckStateMessage();
                ack.setSessionId(sessionID);
                ack.setSeq(seq);
                ackClient.send(ack);
              }
            });
            const initMessage = new AckStateMessage();
            initMessage.setSessionId(sessionID);
            initMessage.setSeq('-1');
            ackClient.send(initMessage);

            resolve(response.getSessionId());
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
      const sendStateMessage = new SendStateMessage();
      sendStateMessage.setSessionId(sessionID);
      sendStateMessage.setDestination(destination);
      sendStateMessage.setState(state);
      try {
        this.stateSenderMap.get(sessionID)(sendStateMessage);
        resolve();
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
        request.setCondition(conditionMessage);
      }
      try {
        grpc.invoke(WebApi.SendConditionalPayment, {
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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
          transport: grpc.WebsocketTransport(),
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

interface Balance {
  freeBalance: string;
  lockedBalance: string;
  receivingCapacity: string;
}

interface Condition {
  deadline: string;
  sessionID: string;
  argsForIsFinalized: Uint8Array;
  argsForQueryResult: Uint8Array;
}

interface AppInfo {
  bin: string;
  abi: string;
  constructor: string;
  nonce: string;
}
