// package: examplegrpc.v1
// file: examplegrpcApi.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getTypeuser(): number;
  setTypeuser(value: number): void;

  getProfessionsid(): number;
  setProfessionsid(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    photo: string,
    typeuser: number,
    professionsid: number,
    username: string,
    password: string,
    email: string,
  }
}

export class GetUsersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
  static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
  export type AsObject = {
    page: number,
    size: number,
  }
}

export class ContentUserArray extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentUserArray.AsObject;
  static toObject(includeInstance: boolean, msg: ContentUserArray): ContentUserArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentUserArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentUserArray;
  static deserializeBinaryFromReader(message: ContentUserArray, reader: jspb.BinaryReader): ContentUserArray;
}

export namespace ContentUserArray {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class GetUsersResponse extends jspb.Message {
  hasContusers(): boolean;
  clearContusers(): void;
  getContusers(): ContentUserArray | undefined;
  setContusers(value?: ContentUserArray): void;

  getPage(): number;
  setPage(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
  static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
  export type AsObject = {
    contusers?: ContentUserArray.AsObject,
    page: number,
    size: number,
    success: boolean,
    message: string,
  }
}

