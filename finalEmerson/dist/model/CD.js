"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Midia_1 = __importDefault(require("./Midia"));
// REQUISITO: Heranca (extends)
// CD herda os atributos e metodos de Midia, e adiciona os seus proprios.
class CD extends Midia_1.default {
    constructor(titulo, ano, autor, numeroFaixas) {
        super(titulo, ano, autor);
        this.numeroFaixas = numeroFaixas;
    }
    // REQUISITO: Sobrescrita
    // Reimplementa o metodo abstrato da classe mae (Midia).
    descrever() {
        return "[CD] " + this.getTitulo() + " - " + this.getAutor() +
            " (" + this.getAno() + "), " + this.numeroFaixas + " faixas";
    }
    getNumeroFaixas() {
        return this.numeroFaixas;
    }
}
exports.default = CD;
