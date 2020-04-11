import { grpc as grpcweb } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GetUsersRequest, GetUsersResponse } from "@protos/v1/examplegrpcApi_pb"
import { ExamplegrpcAPI } from "@protos/v1/examplegrpcApi_pb_service"
const { PORT } = process.env;
const HOST = "http://0.0.0.0";
const SERVER_URL = `${HOST}:${PORT}`;
const { log } = console;

describe("exampleGrpcAPI", () => {

    beforeAll(() => {

    });

    test("Get All Users", done => {
        grpcweb.setDefaultTransport(NodeHttpTransport());
        const client = grpcweb.client(ExamplegrpcAPI.GetUsers, {
            host: SERVER_URL,
            debug: true
        });
        const getUsersRequest = new GetUsersRequest()
        getUsersRequest.setPage(0)
        getUsersRequest.setSize(0)

        client.onEnd((status: grpcweb.Code, statusMessage: string, trailers: grpcweb.Metadata) => {
            log("onEnd: ", status, statusMessage, trailers);
            done()
        });

        client.onMessage((message: grpcweb.ProtobufMessage) => {
            console.log("onMessage: ", message.toObject());
        });

        client.start(new grpcweb.Metadata({ "example": "typescript and grpc" }));
        client.send(getUsersRequest);
        // client.finishSend(); // included for completeness, but likely unnecessary as the request is unary
    }, 6000);

});
