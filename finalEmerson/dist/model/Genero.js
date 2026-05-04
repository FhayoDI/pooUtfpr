"use strict";
// REQUISITO: Associacao entre classes
// Uma Midia tem-um Genero (relacao de associacao).
// Genero existe como classe propria, separada de Midia.
Object.defineProperty(exports, "__esModule", { value: true });
class Genero {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
}
exports.default = Genero;
