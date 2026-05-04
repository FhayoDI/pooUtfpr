import Midia from "./model/Midia";
export default class Database {

    private static instancia: Database = new Database();

    public midias: Midia[] = [];

    private constructor() {}

    public static getInstance(): Database {
        return Database.instancia;
    }

}
