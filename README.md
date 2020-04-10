# Example Typescript Grpc API

Project of example to expose resources using typescript and grpc framework.

## Requirements
- nodejs v12.16+
- npm 6.13.x+
- postgresql v11.5+ running
- git

## Commands to check requirements
- `node --version`
- `npm --version`
- `postgres --version`
- `git --version`

## Technologies used

- **Typescript** (Typed superset of JavaScript that compiles to plain JavaScript.)
- **Grpc** (A high-performance, open source universal RPC framework.)
- **Decorators and sequelize (v5)** for an orm implementation to postgres database.
- **Generic typescript** for an implementation of the *repository pattern* in logic.
- **Definition of contracts** in a .proto file: GRPC provides protocol buffer compiler plugins that generate client- and server-side code _(similar to sdks)_. gRPC users typically call these APIs on the client side and implement the corresponding API on the server side.
- **Jest** (Implementation of tests.)

### Folder descriptions

- **_src/models_**: Models definitions (interaction with persistence through ORM).
- **_src/postgresql_**: Postgres config.
- **_src/protos/v1_**: This folder content the Contracts (using Protocol Buffers as IDL) and SDK files generated.
- **_src/repositories_**: Layern with implementation of repository pattern.
- **_src/implementations_**: Layer with union between repository, utils and implementation for sending and receiving resources using framework grpc.

## Getting Started

### 1. Install dependencies `npm i`

### 2. Generate interfaces (sdks) that you will use to send and receive resources
- Run: `cd ./src/protos/v1`
- Run: `
protoc \
    --plugin="protoc-gen-ts=../../../node_modules/.bin/protoc-gen-ts" \
    --plugin=protoc-gen-grpc=../../../node_modules/.bin/protoc-gen-ts \
    --js_out="import_style=commonjs,binary:." \
    --ts_out=service=grpc-node:"." \
    examplegrpcApi.proto && cd ../../../
    `\
> _This process to generate sdks is necessary per proto file (.proto) into src/protos/v1 folder)_


> **Important:** This work is necessary every time you change any file with a proto extension (contracts).


- And after, check if these files were generated into *./src/protos/v1* folder:\
![Image of folder with sdk proto files][logo]

[logo]: ./sdk-files-message.png

### 3. Config Database connection and database called example_grpc

#### > Create the database using the preferred editor or executing this line by command line: 

- `createdb -h localhost -p 5432 -U <some postgres user> example_grpc` (replace `<some postgres user>`)

#### > Replace connection values in .envrc file (clone .envrc_example file to create this file)

#### > And run `source .envrc` to load this new environment values.

### 4. Run project
- `source .envrc && npm start`

### 5. Run tests in other console
- `source .envrc && npm run test`


## Considerations

1. This example was create using macOs Catalina O.S. (but the steps should not vary much on other systems)
2. The installation steps were also tested in [lubuntu](https://lubuntu.net/) on a virtual machine.

### External links to more info

- [Grpc](https://grpc.io/)
- [Getting starter typescript project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
- [Repository pattern](https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e)
- [ORM](https://github.com/RobinBuschmann/sequelize-typescript)
