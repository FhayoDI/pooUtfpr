"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Midia_1 = __importDefault(require("./Midia"));
class CD extends Midia_1.default {
    constructor(titulo, ano, autor, numeroFaixas, genero) {
        super(titulo, ano, autor, genero);
        this.numeroFaixas = numeroFaixas;
    }
    descrever() {
        return "[CD] " + this.getTitulo() + " - " + this.getAutor() +
            " (" + this.getAno() + "), " + this.numeroFaixas + " faixas";
    }
    getNumeroFaixas() {
        return this.numeroFaixas;
    }
}
exports.default = CD;
