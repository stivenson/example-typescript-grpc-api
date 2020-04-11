// package: examplegrpc.v1
// file: examplegrpcApi.proto

import * as examplegrpcApi_pb from "./examplegrpcApi_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExamplegrpcAPIGetUsers = {
  readonly methodName: string;
  readonly service: typeof ExamplegrpcAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof examplegrpcApi_pb.GetUsersRequest;
  readonly responseType: typeof examplegrpcApi_pb.GetUsersResponse;
};

export class ExamplegrpcAPI {
  static readonly serviceName: string;
  static readonly GetUsers: ExamplegrpcAPIGetUsers;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ExamplegrpcAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUsers(
    requestMessage: examplegrpcApi_pb.GetUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: examplegrpcApi_pb.GetUsersResponse|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: examplegrpcApi_pb.GetUsersRequest,
    callback: (error: ServiceError|null, responseMessage: examplegrpcApi_pb.GetUsersResponse|null) => void
  ): UnaryResponse;
}

