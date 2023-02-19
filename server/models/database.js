import sqlite3 from "sqlite3";
import path from "path";
export class Database {

    /**@var sqlite3.Database #db */
    #db = null;
    #tables = new Map();


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

    get tables() {
        return this.#tables;
    }

    async set_tables() {
        let result = [];
        result = await this.get_users();

        return result;
    }

    /**
     * Function to get all the entries to a query in a map.
     * @param {string} query 
     * @returns {Map<id, row>} Entries keyed with id in a map.
     */
    select(query) {
        let data = new Map();
        return new Promise((resolve, reject) => {
            this.#db.all(query, [], (err, rows) => {

                if (err) {
                    reject(err);
                    return console.log(err.message)
                }

                rows.forEach((row) => {
                    data.set(row.id, row);
                });

                resolve(data);
            });
        });
    }
}

