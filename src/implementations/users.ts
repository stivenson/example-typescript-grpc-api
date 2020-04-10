import { log } from "console";

// import _pb models call to GetUsersRequest, GetUsersResponse
import {
  GetUsersRequest,
  GetUsersResponse
} from "~/protos/v1/examplegrpcApi_pb";

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
    try {
      result.setMessage("200: Users successfully obtained")
      result.setSuccess(true)
    } catch (e) {
      log("ERR@:GetUsers:getUsers: ", e);
      result.setMessage("500: general error performing the request");
      result.setSuccess(false)
    }
    return result
  }

  // the others possible implementations
}
