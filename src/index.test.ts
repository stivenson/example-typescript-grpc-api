import {
    GetUsersResponse,
} from "~/protos/v1/examplegrpcApi_pb";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { PATH_PROTO_FILE, PORT } = process.env;
const HOST = "0.0.0.0";
const SERVER_URL = `${HOST}:${PORT}`;
const { log } = console;
const path = require("path");
const PATH_PROTO = PATH_PROTO_FILE || ""
const dirPathProtoFile = path.join(__dirname, PATH_PROTO);

describe("exampleGrpcAPI", () => {
    let clientTest: any;
    beforeAll(() => {
        const packageDefinition = protoLoader.loadSync(dirPathProtoFile, {
            keepCase: false,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            arrays: true
        });

        const proto = grpc.loadPackageDefinition(packageDefinition);
        clientTest = new proto.examplegrpc.v1.ExamplegrpcAPI(
            SERVER_URL,
            grpc.credentials.createInsecure()
        );

    });

    test("Get All Users", done => {
        const messageRequest = {
            page: 1,
            size: 10
        };
        clientTest.getUsers(messageRequest, (err: any, response: Object) => {
            if (err) {
                log("The error is:", err);
            }
            log("The response is:", response); // optional use to check response
            expect(typeof response).toBe('object')
            // TODO: pending problem to receive arrays
            return done();
        });
    });

});
