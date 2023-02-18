import { Database } from "./database.js";
export class User {

    constructor() {
    }

    #rand_users = ['Maik', 'Jacky', 'Jana', 'Jannes'];

    get rand_users() {
        return this.get_random_users();
    }

    test_db_connection() {
        const db = new Database();
        return db.get_tables();
    }

    get_random_users() {
        return this.#rand_users;
    }
}