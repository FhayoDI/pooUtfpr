"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusMidia_1 = require("../enum/StatusMidia");
// REQUISITO: Classe Abstrata
// Midia nao pode ser instanciada diretamente, apenas serve de modelo
// para as classes filhas (CD e DVD).
//
// REQUISITO: Classificacao
// Midia classifica seus subtipos (CD e DVD) em uma hierarquia comum.
class Midia {
    constructor(titulo, ano, autor) {
        this.status = StatusMidia_1.StatusMidia.DISPONIVEL;
        this.id = Midia.proximoId++;
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
    }
    // Getters e Setters
    getId() {
        return this.id;
    }
    getTitulo() {
        return this.titulo;
    }
    getAno() {
        return this.ano;
    }
    getAutor() {
        return this.autor;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
}
Midia.proximoId = 1;
exports.default = Midia;
