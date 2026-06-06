"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CD_1 = __importDefault(require("../model/CD"));
const DVD_1 = __importDefault(require("../model/DVD"));
class MidiaController {
    constructor(repository) {
        this.repository = repository;
    }
    cadastrarCD(titulo, ano, autor, faixas, genero) {
        const cd = new CD_1.default(titulo, ano, autor, faixas, genero);
        this.repository.salvar(cd);
        return cd;
    }
    cadastrarDVD(titulo, ano, autor, duracao, genero) {
        const dvd = new DVD_1.default(titulo, ano, autor, duracao, genero);
        this.repository.salvar(dvd);
        return dvd;
    }
    buscar(termo) {
        if (typeof termo === "number") {
            return this.repository.buscarPorId(termo);
        }
        else {
            return this.repository.buscarPorTitulo(termo);
        }
    }
    atualizarMidia(id, genero, status) {
        const midia = this.repository.buscarPorId(id);
        if (genero) {
            midia.setGenero(genero);
        }
        if (status) {
            midia.setStatus(status);
        }
        // grava a alteracao no arquivo
        this.repository.persistir();
    }
    //Listagem
    listarTodas() {
        return this.repository.buscarTodos();
    }
    listarOrdenadasPorAno() {
        return this.repository.ordenarPorAno();
    }
    listarOrdenadasPorTitulo() {
        return this.repository.ordenarPorTitulo();
    }
}
exports.default = MidiaController;
