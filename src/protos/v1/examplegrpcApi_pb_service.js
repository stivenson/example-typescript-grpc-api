// package: examplegrpc.v1
// file: examplegrpcApi.proto

var examplegrpcApi_pb = require("./examplegrpcApi_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExamplegrpcAPI = (function () {
  function ExamplegrpcAPI() {}
  ExamplegrpcAPI.serviceName = "examplegrpc.v1.ExamplegrpcAPI";
  return ExamplegrpcAPI;
}());

ExamplegrpcAPI.GetUsers = {
  methodName: "GetUsers",
  service: ExamplegrpcAPI,
  requestStream: false,
  responseStream: false,
  requestType: examplegrpcApi_pb.GetUsersRequest,
  responseType: examplegrpcApi_pb.GetUsersResponse
};

exports.ExamplegrpcAPI = ExamplegrpcAPI;

function ExamplegrpcAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExamplegrpcAPIClient.prototype.getUsers = function getUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExamplegrpcAPI.GetUsers, {
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

exports.ExamplegrpcAPIClient = ExamplegrpcAPIClient;

