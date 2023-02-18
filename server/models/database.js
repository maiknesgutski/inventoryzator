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
        let result = [];
        result = await this.get_users();
        console.log(result);

        return result;
    }

    getRecords(){
        return new Promise((resolve,reject)=>{
        db.all('SELECT * FROM langs ORDER BY name',[],(err,rows)=>{
          if(err){
              return console.error(err.message);
          }
          rows.forEach((row)=>{
              data.push(row);
          });
          
         resolve(data);
      })
        
        })
      }

    get_users() {
        return new Promise((resolve, reject) => {
            this.#db.each("SELECT * FROM 'users' WHERE username = 'maiki';", (err, row) => {
                result.push(row);
            });
            resolve(result);
        });
    }
}

