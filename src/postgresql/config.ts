const {
    POSTGRESQL_DATABASE,
    POSTGRESQL_USER,
    POSTGRESQL_PASSWORD,
    POSTGRESQL_HOST,
    POSTGRESQL_PORT
} = process.env

const username = POSTGRESQL_USER || ""
const password = POSTGRESQL_PASSWORD || ""
const database = POSTGRESQL_DATABASE || ""
const host = POSTGRESQL_HOST || ""
const port = POSTGRESQL_PORT || 0

export interface Config {
    database: string;
    username: string;
    password: string;
    host: string;
    port: number;
}
const configPsql: Config = {
    username,
    password,
    database,
    host,
    port,
} as Config;

export default configPsql;
