"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// REQUISITO: Inovacao / Boa Pratica - Singleton
// Database e um simulador de SGBD (igual o prof faz no garage).
// O padrao Singleton garante que existe apenas UMA instancia do banco
// no sistema todo. Util porque os dados precisam ser compartilhados
// entre repositorios e nao queremos varias copias do mesmo array.
//
// Construtor privado impede 'new Database()' fora da classe.
// Para pegar a instancia, usa Database.getInstance().
class Database {
    constructor() {
        this.midias = [];
    }
    static getInstance() {
        return Database.instancia;
    }
}
Database.instancia = new Database();
exports.default = Database;
