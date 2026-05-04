"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
const MidiaNaoEncontradaError_1 = __importDefault(require("../exception/MidiaNaoEncontradaError"));
// REQUISITO: Polimorfismo (implementa IMidiaRepository)
// A classe atende ao contrato da interface. Quem usa o repository
// pode trabalhar so com a interface, sem conhecer esta classe.
//
// REQUISITO: Persistencia / Busca / Ordenacao
// Os dados ficam no Database (singleton). Aqui implementamos
// os metodos de busca e ordenacao.
class MidiaRepository {
    constructor() {
        this.database = Database_1.default.getInstance();
    }
    // === Persistencia ===
    salvar(midia) {
        this.database.midias.push(midia);
    }
    buscarTodos() {
        return this.database.midias;
    }
    // === Busca ===
    // Lanca excecao personalizada se a midia nao for encontrada.
    buscarPorId(id) {
        const midia = this.database.midias.find(m => m.getId() === id);
        if (!midia) {
            throw new MidiaNaoEncontradaError_1.default("Midia com id " + id + " nao encontrada.");
        }
        return midia;
    }
    buscarPorTitulo(titulo) {
        const midia = this.database.midias.find(m => m.getTitulo().toLowerCase() === titulo.toLowerCase());
        if (!midia) {
            throw new MidiaNaoEncontradaError_1.default("Midia com titulo '" + titulo + "' nao encontrada.");
        }
        return midia;
    }
    // === Ordenacao ===
    ordenarPorAno() {
        // [...array] cria uma copia para nao mexer no array original
        return [...this.database.midias].sort((a, b) => a.getAno() - b.getAno());
    }
    ordenarPorTitulo() {
        return [...this.database.midias].sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }
}
exports.default = MidiaRepository;
