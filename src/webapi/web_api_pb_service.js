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
  responseType: web_api_pb.OpenChannelResponse
};

WebApi.Deposit = {
  methodName: "Deposit",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.DepositRequest,
  responseType: web_api_pb.DepositResponse
};

WebApi.Withdraw = {
  methodName: "Withdraw",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.WithdrawRequest,
  responseType: web_api_pb.WithdrawResponse
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
  responseType: web_api_pb.SendConditionalPaymentResponse
};

WebApi.CreateAppSession = {
  methodName: "CreateAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.CreateAppSessionRequest,
  responseType: web_api_pb.CreateAppSessionResponse
};

WebApi.ReceiveStates = {
  methodName: "ReceiveStates",
  service: WebApi,
  requestStream: false,
  responseStream: true,
  requestType: web_api_pb.ReceiveStatesRequest,
  responseType: web_api_pb.StateMessage
};

WebApi.SendState = {
  methodName: "SendState",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SendStateRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.AckState = {
  methodName: "AckState",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.AckStateRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.SettleAppSession = {
  methodName: "SettleAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.SettleAppSessionRequest,
  responseType: web_api_pb.SettleAppSessionResponse
};

WebApi.EndAppSession = {
  methodName: "EndAppSession",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.EndAppSessionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.RegisterOracle = {
  methodName: "RegisterOracle",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.RegisterOracleRequest,
  responseType: google_protobuf_empty_pb.Empty
};

WebApi.ResolveOracle = {
  methodName: "ResolveOracle",
  service: WebApi,
  requestStream: false,
  responseStream: false,
  requestType: web_api_pb.ResolveOracleRequest,
  responseType: google_protobuf_empty_pb.Empty
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

WebApiClient.prototype.createAppSession = function createAppSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.CreateAppSession, {
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

WebApiClient.prototype.receiveStates = function receiveStates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WebApi.ReceiveStates, {
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

WebApiClient.prototype.sendState = function sendState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.SendState, {
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

WebApiClient.prototype.ackState = function ackState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.AckState, {
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

WebApiClient.prototype.registerOracle = function registerOracle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.RegisterOracle, {
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

WebApiClient.prototype.resolveOracle = function resolveOracle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebApi.ResolveOracle, {
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

