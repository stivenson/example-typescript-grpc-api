# Example Typescript Grpc API

[![Build Status](https://travis-ci.org/stivenson/example-typescript-grpc-api.svg?branch=master)](https://travis-ci.org/stivenson/example-typescript-grpc-api)

Project of example to expose resources using typescript and grpc framework.

## Technologies used
| -- |
|-----------|
| - **Typescript** (Typed superset of JavaScript that compiles to plain JavaScript.)|
| - **Grpc** (A high-performance, open source universal RPC framework.)|
| - **Decorators and sequelize (v5)** for an orm implementation to postgres database.|
| - **Generic typescript** for an implementation of the *repository pattern* in logic.|
| - **Definition of contracts** in a .proto file: GRPC provides protocol buffer compiler plugins that generate client- and server-side code _(similar to sdks)_. gRPC users typically call these APIs on the client side and implement the corresponding API on the server side.|
| - **Jest** (Implementation of tests.)|
|- **Envoy proxy** (To use of grpc serve from web client in tests.)|

## Requirements
- nodejs v12.16+
- npm 6.13.x+
- postgresql v11.5+ running
- git
- docker 19.x+ running

## Installing the Protobuf Compiler

- To macOs: [instructions](https://medium.com/@erika_dike/installing-the-protobuf-compiler-on-a-mac-a0d397af46b8)
- To Ubuntu: install package `protobuf-compiler`

## Commands to check requirements
- `node --version`
- `npm --version`
- `postgres --version` (or similar depending Operating System, O.S.)
- `git --version`
- `protoc --version` (Protobuf Compiler)
- `docker --version`


## Folder descriptions

- **_src/models_**: Models definitions (interaction with persistence through ORM).
- **_src/postgresql_**: Postgres config.
- **_src/protos/v1_**: This folder content the Contracts (using Protocol Buffers as IDL) and SDK files generated.
- **_src/repositories_**: Layern with implementation of repository pattern.
- **_src/implementations_**: Layer with union between repository, utils and implementation for sending and receiving resources using framework grpc.

## Getting Started

### 1. Install dependencies

- Run: `npm i`

### 2. Generate interfaces (sdks) that you will use to send and receive resources
- Run: `cd ./src/protos/v1`
- Run: `
protoc --plugin="protoc-gen-ts=../../../node_modules/.bin/protoc-gen-ts" --plugin=protoc-gen-grpc=../../../node_modules/.bin/protoc-gen-ts --js_out="import_style=commonjs,binary:." --ts_out=service=grpc-web:"."  examplegrpcApi.proto && cd ../../../ `

> _This process to generate sdks is necessary per proto file (.proto) into src/protos/v1 folder)_

- And after, check if these files were generated into *./src/protos/v1* folder:\
![Image of folder with sdk proto files][logo]

[logo]: ./sdk-files-message.png

```
Important: This second step is necessary every time you change any file with a proto extension (contracts). 
```

### 3. Config Database connection and database called example_grpc

#### > Create the database using the preferred editor or executing this line by command line: 

- `createdb -h localhost -p 5432 -U <some postgres user> example_grpc` (replace `<some postgres user>`)

#### > Replace connection values in .envrc file (clone .envrc_example file to create this file)

#### > And run `source .envrc` to load this new environment values.

### 4. Run project
- `source .envrc && npm start`

### 5. Start envoy proxy using docker in other console
- run: `cd envoy-proxy`
- run: `docker build -t envoy:v1 .`
- run: `docker run  -p 8080:8080 --ip=192.168.0.13  envoy:v1`

> If "PORT" is not visible in the list that appears with the command "docker ps" you need to use your local ip, so:  `docker run  -p 8080:8080 --ip=<here your local ip>  envoy:v1 (but before this remember to stop and destroy the container you just created)`

### 6. Run tests in other console
- `source .envrc && npm run test`

> Important: If when running the tests the proxy does not establish a connection to the grpc server, it is necessary that you replace your local ip in the file **_envoy-proxy/envoy.yaml_** in all the "places where the ip is: "0.0.0.0"

## Considerations

1. This example was create using macOs Catalina O.S. (but the steps should not vary much on other systems)
2. The installation steps were also tested in [lubuntu](https://lubuntu.net/) on a virtual machine.

### External links to more info

- [Grpc](https://grpc.io/)
- [Getting starter typescript project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
- [Repository pattern](https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e)
- [ORM](https://github.com/RobinBuschmann/sequelize-typescript)
- [Envoy proxy and grpc](https://grpc.io/docs/tutorials/basic/web/#configure-the-envoy-proxy)