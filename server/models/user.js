import { Database } from "./database.js";
import { Model } from "./model.js";
export class User extends Model{

    #rand_users = ['Maik', 'Jacky', 'Jana', 'Jannes'];

    #table = "users";

    /**
     * Constructor
     * @param {bool} with_db 
     */
    constructor(with_db) {
        super(with_db);
    }

    get rand_users() {
        return this.#rand_users;
    }

}