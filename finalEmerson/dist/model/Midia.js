"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusMidia_1 = require("../enum/StatusMidia");
const AnoInvalidoError_1 = __importDefault(require("../exception/AnoInvalidoError"));
class Midia {
    constructor(titulo, ano, autor, genero) {
        this.status = StatusMidia_1.StatusMidia.DISPONIVEL;
        if (ano < 1900 || ano > 2026) {
            throw new AnoInvalidoError_1.default(ano);
        }
        this.id = Midia.proximoId++;
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
        this.genero = genero;
    }
    getId() {
        return this.id;
    }
    restaurarId(id) {
        this.id = id;
        if (id >= Midia.proximoId) {
            Midia.proximoId = id + 1;
        }
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
    getGenero() {
        return this.genero;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    setGenero(genero) {
        this.genero = genero;
    }
}
Midia.proximoId = 1;
exports.default = Midia;
