import {Client, ID, Databases, OAuthProvider, Query, Account, Storage, TablesDB} from "appwrite"

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("69b33a19002c3135b911");


const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const tablesDB = new TablesDB(client);

export {account, database, client, storage, tablesDB};
