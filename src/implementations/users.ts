import { log } from "console";

// import _pb models call to GetUsersRequest, GetUsersResponse
import {
  GetUsersRequest,
  GetUsersResponse,
  User as UserPb
} from "~/protos/v1/examplegrpcApi_pb";
import User from "@models/users"
import { UsersRepository } from "@repositories/users"

export default class Users {

  public static setFromRequest(request: any): GetUsersRequest {
    const getDataRequest = new GetUsersRequest();
    getDataRequest.setPage(request.page);
    getDataRequest.setSize(request.size);
    return getDataRequest;
  }

  private request: GetUsersRequest;

  constructor(request: GetUsersRequest) {
    this.request = request;
  }

  /**
   * @async
   * @function getUsers
   * @returns { Promise<any> } return an users list
   */
  public async getAllUsers(): Promise<GetUsersResponse> {
    const result = new GetUsersResponse();
    const repo = new UsersRepository(User)
    try {
      const usersPsql = await repo.findAll()

      // Set values
      usersPsql.map(userPsql => {
        let userPb = new UserPb()
        userPb.setName(userPsql.name)
        userPb.setEmail(userPsql.email)
        userPb.setPhoto(userPsql.photo)
        userPb.setTypeuser(userPsql.typeUser)
        userPb.setUsername(userPsql.username)
        userPb.setProfessionsid(userPsql.professionsId)
        userPb.setPassword("")
        // others possible set values

        result.addUsers(userPb)
      });
      result.setMessage("200: Users successfully obtained")
      result.setSuccess(true)
    } catch (e) {
      log("ERR@:GetUsers:getUsers: ", e);
      result.setMessage("500: general error performing the request");
      result.setSuccess(false)
    }
    log(result.getUsersList())
    return result
  }

  // the others possible implementations
}
