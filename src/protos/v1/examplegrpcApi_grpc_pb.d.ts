// GENERATED CODE -- DO NOT EDIT!

// package: examplegrpc.v1
// file: examplegrpcApi.proto

import * as examplegrpcApi_pb from "./examplegrpcApi_pb";
import * as grpc from "grpc";

interface IExamplegrpcAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUsers: grpc.MethodDefinition<examplegrpcApi_pb.GetUsersRequest, examplegrpcApi_pb.GetUsersResponse>;
}

export const ExamplegrpcAPIService: IExamplegrpcAPIService;

export class ExamplegrpcAPIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUsers(argument: examplegrpcApi_pb.GetUsersRequest, callback: grpc.requestCallback<examplegrpcApi_pb.GetUsersResponse>): grpc.ClientUnaryCall;
  getUsers(argument: examplegrpcApi_pb.GetUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<examplegrpcApi_pb.GetUsersResponse>): grpc.ClientUnaryCall;
  getUsers(argument: examplegrpcApi_pb.GetUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<examplegrpcApi_pb.GetUsersResponse>): grpc.ClientUnaryCall;
}
