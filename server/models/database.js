import sqlite3 from "sqlite3";
import path from "path";
export class Database {

    /**@var sqlite3.Database #db */
    #db = null;
    constructor() {
        console.log(path.resolve("server/database/inventory.db"));
        this.#db = new sqlite3.Database(path.resolve("server/database/inventory.db"), (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the SQlite inventory database.');
        });
    }

    /**
     * Returns the private db property
     */
    get db() {
        return this.#db;
    }

    async get_tables() {
        return Promise.resolve()
        let results = [];
        let t = await this.#db.serialize(() => {
            results.push( this.#db.each("SELECT * FROM 'users' WHERE username = 'maiki';", (err, row) => {
                console.log(row);
                return row;
            }));
        });
        return results;
    }
}

