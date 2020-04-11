import 'module-alias/register';

import path from "path";
import * as protoLoader from "@grpc/proto-loader"
import { log } from "console"
import * as grpc from "grpc"
import Users from "./implementations/users";
import { initTables } from "./models"

const {
    PATH_PROTO_FILE,
    PORT
} = process.env

const PATH_PROTO = PATH_PROTO_FILE || ""
const dirPathProtoFile = path.join(__dirname, PATH_PROTO);

const packageDefinition = protoLoader.loadSync(dirPathProtoFile, {
    defaults: true,
    enums: String,
    longs: String,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any

/**
 * Implementation for ExampleGrpcApi
 */
class ExampleGrpcApi implements IExampleGrpcApi {

    public async getUsers(call: any, callback: any): Promise<any> {
        const getDataRequest = Users.setFromRequest(call.request);
        const getUsersImpl = new Users(getDataRequest);
        const rs = await getUsersImpl.getAllUsers();
        return callback(null, rs.toObject());
    }
}

const server = new grpc.Server();
const grpcService: IExampleGrpcApi = new ExampleGrpcApi();

server.addService(proto.examplegrpc.v1.ExamplegrpcAPI.service, {
    getUsers: grpcService.getUsers,
});

server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());

const initAll = async () => {
    if(!(await initTables())) {
        log(`Problems with creation of tables in database`);
    } else {
        server.start();
        log(`Server started successfully on ${PORT}`);
    }
}

initAll()
