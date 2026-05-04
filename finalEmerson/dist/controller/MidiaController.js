"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CD_1 = __importDefault(require("../model/CD"));
const DVD_1 = __importDefault(require("../model/DVD"));
// REQUISITO: MVC - Comunicacao via Controller
// O Controller e o intermediario entre View (menu) e Model (Midia/Repository).
// A View nunca fala direto com o Repository - sempre passa pelo Controller.
//
// REQUISITO: Injecao de Dependencia
// O repositorio NAO e instanciado dentro da classe. E recebido pelo
// construtor (dependencia explicita). O tipo declarado e a interface
// IMidiaRepository (nao a classe concreta) - inversao de dependencia.
class MidiaController {
    constructor(repository) {
        this.repository = repository;
    }
    // === Cadastro ===
    cadastrarCD(titulo, ano, autor, faixas) {
        const cd = new CD_1.default(titulo, ano, autor, faixas);
        this.repository.salvar(cd);
        return cd;
    }
    cadastrarDVD(titulo, ano, autor, duracao) {
        const dvd = new DVD_1.default(titulo, ano, autor, duracao);
        this.repository.salvar(dvd);
        return dvd;
    }
    // REQUISITO: Sobrecarga (com union types)
    // O metodo 'buscar' aceita tanto numero (id) quanto string (titulo).
    // Estilo igual ao prof faz em SaleVehicle.sale(vehicle: Car | Motorcicle).
    buscar(termo) {
        if (typeof termo === "number") {
            return this.repository.buscarPorId(termo);
        }
        else {
            return this.repository.buscarPorTitulo(termo);
        }
    }
    // REQUISITO: Sobrecarga (parametros opcionais)
    // Estilo igual ao prof faz em sale2(cost: number, car?: Car, motorcicle?: Motorcicle).
    // Pode chamar passando so genero, so status, ou os dois.
    atualizarMidia(id, genero, status) {
        const midia = this.repository.buscarPorId(id);
        if (genero) {
            midia.setGenero(genero);
        }
        if (status) {
            midia.setStatus(status);
        }
    }
    // === Listagem ===
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
