import { Database } from "./database.js";
/**
 * Class to handle barebone database interactions for different models.
 */
export class Model{
   
    /**@type {Database} */
    #db;
    
    #table = "users";

    constructor(with_db) {
        if (with_db) {
            this.init_database();
        }
    }

    get table() {
        return this.#table;
    }

    init_database() {
        this.#db = new Database();
    }

    /**
     * Gets all the entries
     * @returns {Map<id, object>}
     */
    async get_all() {
        try {
            const query = `SELECT * FROM ${this.#table}`;
            return this.#db.select(query);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    /**
     * Gets single entry by ID
     * @param {int} id 
     * @returns {Map<id, object>}
     */
    async get_by_id(id) {
        try {
            const query = `SELECT * FROM ${this.#table}`;
            return this.#db.select(query);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}