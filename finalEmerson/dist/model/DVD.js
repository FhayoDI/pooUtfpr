"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Midia_1 = __importDefault(require("./Midia"));
class DVD extends Midia_1.default {
    constructor(titulo, ano, autor, duracaoMinutos, genero) {
        super(titulo, ano, autor, genero);
        this.duracaoMinutos = duracaoMinutos;
    }
    descrever() {
        return "[DVD] " + this.getTitulo() + " - " + this.getAutor() +
            " (" + this.getAno() + "), " + this.duracaoMinutos + " min";
    }
    getDuracaoMinutos() {
        return this.duracaoMinutos;
    }
}
exports.default = DVD;
