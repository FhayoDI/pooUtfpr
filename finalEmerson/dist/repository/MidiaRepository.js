"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const CD_1 = __importDefault(require("../model/CD"));
const DVD_1 = __importDefault(require("../model/DVD"));
const Genero_1 = __importDefault(require("../model/Genero"));
const RepositorioEmMemoria_1 = __importDefault(require("./RepositorioEmMemoria"));
const MidiaNaoEncontradaError_1 = __importDefault(require("../exception/MidiaNaoEncontradaError"));
class MidiaRepository extends RepositorioEmMemoria_1.default {
    constructor(arquivo = "dados.json") {
        super();
        this.arquivo = arquivo;
        this.carregar();
    }
    salvar(midia) {
        super.salvar(midia);
        this.persistir();
    }
    buscarPorId(id) {
        const midia = super.buscarPorId(id);
        if (!midia) {
            throw new MidiaNaoEncontradaError_1.default("Midia com id " + id + " nao encontrada.");
        }
        return midia;
    }
    buscarPorTitulo(titulo) {
        const achada = this.itens.find(m => m.getTitulo().toLowerCase() === titulo.toLowerCase());
        if (!achada) {
            throw new MidiaNaoEncontradaError_1.default("Midia com titulo '" + titulo + "' nao encontrada.");
        }
        return achada;
    }
    ordenarPorAno() {
        return this.itens.slice().sort((a, b) => a.getAno() - b.getAno());
    }
    ordenarPorTitulo() {
        return this.itens.slice().sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }
    persistir() {
        const lista = this.itens.map(m => ({
            id: m.getId(),
            tipo: m instanceof CD_1.default ? "CD" : "DVD",
            titulo: m.getTitulo(),
            ano: m.getAno(),
            autor: m.getAutor(),
            status: m.getStatus(),
            genero: { nome: m.getGenero().getNome(), descricao: m.getGenero().getDescricao() },
            numeroFaixas: m instanceof CD_1.default ? m.getNumeroFaixas() : 0,
            duracaoMinutos: m instanceof DVD_1.default ? m.getDuracaoMinutos() : 0,
        }));
        fs.writeFileSync(this.arquivo, JSON.stringify(lista, null, 2));
    }
    carregar() {
        if (!fs.existsSync(this.arquivo)) {
            return;
        }
        const lista = JSON.parse(fs.readFileSync(this.arquivo, "utf-8"));
        for (const o of lista) {
            const genero = new Genero_1.default(o.genero.nome, o.genero.descricao);
            const midia = o.tipo === "CD"
                ? new CD_1.default(o.titulo, o.ano, o.autor, o.numeroFaixas, genero)
                : new DVD_1.default(o.titulo, o.ano, o.autor, o.duracaoMinutos, genero);
            midia.restaurarId(o.id);
            midia.setStatus(o.status);
            this.itens.push(midia);
        }
    }
}
exports.default = MidiaRepository;
