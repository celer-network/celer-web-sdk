// package: webrpc
// file: web_api.proto

var web_api_pb = require("./web_api_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WebApi = (function () {
  function WebApi() {}
  WebApi.serviceName = "webrpc.WebApi";
  return WebApi;
}());

WebApi.OpenChannel = {
  methodName: "OpenChannel",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.OpenChannelRequest,
  responseType: web_api_pb.ChannelID
};

WebApi.Deposit = {
  methodName: "Deposit",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.DepositRequest,
  responseType: web_api_pb.TxHash
};

WebApi.Withdraw = {
  methodName: "Withdraw",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.WithdrawRequest,
  responseType: web_api_pb.TxHash
};

WebApi.GetBalance = {
  methodName: "GetBalance",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetBalanceRequest,
  responseType: web_api_pb.GetBalanceResponse
};

WebApi.SendConditionalPayment = {
  methodName: "SendConditionalPayment",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SendConditionalPaymentRequest,
  responseType: web_api_pb.PaymentID
};

WebApi.SubscribeIncomingPayments = {
  methodName: "SubscribeIncomingPayments",
  service: WebApi,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: web_api_pb.PaymentInfo
};

WebApi.ConfirmOutgoingPayment = {
  methodName: "ConfirmOutgoingPayment",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.PaymentID,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.RejectIncomingPayment = {
  methodName: "RejectIncomingPayment",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.PaymentID,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.SettleIncomingPayment = {
  methodName: "SettleIncomingPayment",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.PaymentID,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.CreateAppSessionOnDeployedContract = {
  methodName: "CreateAppSessionOnDeployedContract",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreateAppSessionOnDeployedContractRequest,
  responseType: web_api_pb.SessionID
};

WebApi.SubscribeAppSessionDisputes = {
  methodName: "SubscribeAppSessionDisputes",
  service: WebApi,
  requestStream: false,
  responseStream: true,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.DisputeInfo
};

WebApi.SignOutgoingState = {
  methodName: "SignOutgoingState",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SignOutgoingStateRequest,
  responseType: web_api_pb.SignedState
};

WebApi.ValidateAck = {
  methodName: "ValidateAck",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ValidateAckRequest,
  responseType: web_api_pb.BoolValue
};

WebApi.ProcessReceivedState = {
  methodName: "ProcessReceivedState",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ProcessReceivedStateRequest,
  responseType: web_api_pb.ProcessReceivedStateResponse
};

WebApi.SettleAppSession = {
  methodName: "SettleAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SettleAppSessionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.EndAppSession = {
  methodName: "EndAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.GetDeployedAddressForAppSession = {
  methodName: "GetDeployedAddressForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.Address
};

WebApi.GetBooleanResultForAppSession = {
  methodName: "GetBooleanResultForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetBooleanResultForAppSessionRequest,
  responseType: web_api_pb.BooleanResult
};

WebApi.ApplyActionForAppSession = {
  methodName: "ApplyActionForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ApplyActionForAppSessionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.FinalizeOnActionTimeoutForAppSession = {
  methodName: "FinalizeOnActionTimeoutForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.GetSettleFinalizedTimeForAppSession = {
  methodName: "GetSettleFinalizedTimeForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.SettleFinalizedTime
};

WebApi.GetActionDeadlineForAppSession = {
  methodName: "GetActionDeadlineForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.ActionDeadline
};

WebApi.GetStatusForAppSession = {
  methodName: "GetStatusForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.AppSessionStatus
};

WebApi.GetStateForAppSession = {
  methodName: "GetStateForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.GetStateForAppSessionRequest,
  responseType: web_api_pb.AppSessionState
};

WebApi.GetSeqNumForAppSession = {
  methodName: "GetSeqNumForAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SessionID,
  responseType: web_api_pb.AppSessionSeqNum
};

exports.WebApi = WebApi;

function WebApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WebApiClient.prototype.openChannel = function openChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.OpenChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.Deposit, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.withdraw = function withdraw(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.Withdraw, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getBalance = function getBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.sendConditionalPayment = function sendConditionalPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.SendConditionalPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.subscribeIncomingPayments = function subscribeIncomingPayments(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WebApi.SubscribeIncomingPayments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

WebApiClient.prototype.confirmOutgoingPayment = function confirmOutgoingPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.ConfirmOutgoingPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.rejectIncomingPayment = function rejectIncomingPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.RejectIncomingPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.settleIncomingPayment = function settleIncomingPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.SettleIncomingPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.createAppSessionOnDeployedContract = function createAppSessionOnDeployedContract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.CreateAppSessionOnDeployedContract, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.subscribeAppSessionDisputes = function subscribeAppSessionDisputes(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WebApi.SubscribeAppSessionDisputes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

WebApiClient.prototype.signOutgoingState = function signOutgoingState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.SignOutgoingState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.validateAck = function validateAck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.ValidateAck, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.processReceivedState = function processReceivedState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.ProcessReceivedState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.settleAppSession = function settleAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.SettleAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.endAppSession = function endAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.EndAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getDeployedAddressForAppSession = function getDeployedAddressForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetDeployedAddressForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getBooleanResultForAppSession = function getBooleanResultForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetBooleanResultForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.applyActionForAppSession = function applyActionForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.ApplyActionForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.finalizeOnActionTimeoutForAppSession = function finalizeOnActionTimeoutForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.FinalizeOnActionTimeoutForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getSettleFinalizedTimeForAppSession = function getSettleFinalizedTimeForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetSettleFinalizedTimeForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getActionDeadlineForAppSession = function getActionDeadlineForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetActionDeadlineForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getStatusForAppSession = function getStatusForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetStatusForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getStateForAppSession = function getStateForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetStateForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WebApiClient.prototype.getSeqNumForAppSession = function getSeqNumForAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.GetSeqNumForAppSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WebApiClient = WebApiClient;

