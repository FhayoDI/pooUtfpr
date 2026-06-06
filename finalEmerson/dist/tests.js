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
const MidiaRepository_1 = __importDefault(require("./repository/MidiaRepository"));
const MidiaController_1 = __importDefault(require("./controller/MidiaController"));
const Genero_1 = __importDefault(require("./model/Genero"));
const StatusMidia_1 = require("./enum/StatusMidia");
const MidiaNaoEncontradaError_1 = __importDefault(require("./exception/MidiaNaoEncontradaError"));
console.log("==== Iniciando testes ====\n");
const ARQUIVO_TESTE = "dados.tests-manual.json";
if (fs.existsSync(ARQUIVO_TESTE)) {
    fs.unlinkSync(ARQUIVO_TESTE);
}
const repository = new MidiaRepository_1.default(ARQUIVO_TESTE);
const controller = new MidiaController_1.default(repository);
const rock = new Genero_1.default("Rock", "Genero musical com guitarras eletricas");
console.log("Teste 1: cadastrar CD");
const cd = controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9, rock);
console.assert(cd.getTitulo() === "Thriller", "FALHA: titulo errado");
console.assert(cd.getAno() === 1982, "FALHA: ano errado");
console.assert(cd.getStatus() === StatusMidia_1.StatusMidia.DISPONIVEL, "FALHA: status inicial deve ser DISPONIVEL");
console.log("OK");
console.log("\nTeste 2: cadastrar DVD");
const dvd = controller.cadastrarDVD("Matrix", 1999, "Wachowskis", 136, new Genero_1.default("Acao", "Genero de filme"));
console.assert(dvd.getTitulo() === "Matrix", "FALHA: titulo errado");
console.assert(dvd.getDuracaoMinutos() === 136, "FALHA: duracao errada");
console.log("OK");
console.log("\nTeste 3: sobrescrita - descrever() deve ser diferente para CD e DVD");
console.assert(cd.descrever().includes("[CD]"), "FALHA: descricao do CD nao tem [CD]");
console.assert(dvd.descrever().includes("[DVD]"), "FALHA: descricao do DVD nao tem [DVD]");
console.log("CD: " + cd.descrever());
console.log("DVD: " + dvd.descrever());
console.log("OK");
console.log("\nTeste 4: associacao com Genero");
console.assert(cd.getGenero().getNome() === "Rock", "FALHA: genero nao foi associado no cadastro");
console.log("OK");
console.log("\nTeste 5: sobrecarga buscar() - por ID (number)");
const achadoPorId = controller.buscar(cd.getId());
console.assert(achadoPorId.getTitulo() === "Thriller", "FALHA: nao achou por id");
console.log("OK");
console.log("\nTeste 6: sobrecarga buscar() - por TITULO (string)");
const achadoPorTitulo = controller.buscar("Matrix");
console.assert(achadoPorTitulo.getAno() === 1999, "FALHA: nao achou por titulo");
console.log("OK");
console.log("\nTeste 7: excecao MidiaNaoEncontradaError");
let lancouExcecao = false;
try {
    controller.buscar(9999);
}
catch (error) {
    if (error instanceof MidiaNaoEncontradaError_1.default) {
        lancouExcecao = true;
    }
}
console.assert(lancouExcecao, "FALHA: deveria ter lancado MidiaNaoEncontradaError");
console.log("OK");
console.log("\nTeste 8: atualizarMidia (parametros opcionais)");
controller.atualizarMidia(cd.getId(), undefined, StatusMidia_1.StatusMidia.EMPRESTADA);
console.assert(cd.getStatus() === StatusMidia_1.StatusMidia.EMPRESTADA, "FALHA: status nao mudou");
console.log("OK");
console.log("\nTeste 9: ordenar por ano");
controller.cadastrarCD("Nevermind", 1991, "Nirvana", 13, rock);
const ordenadas = controller.listarOrdenadasPorAno();
console.assert(ordenadas[0].getAno() === 1982, "FALHA: primeiro deveria ser de 1982");
console.assert(ordenadas[ordenadas.length - 1].getAno() === 1999, "FALHA: ultimo deveria ser de 1999");
console.log("OK");
console.log("\nTeste 10: polimorfismo - lista mista chamando descrever()");
const todas = controller.listarTodas();
todas.forEach(m => {
    const desc = m.descrever();
    console.assert(desc.length > 0, "FALHA: descrever vazio");
    console.log("  " + desc);
});
console.log("OK");
console.log("\nTeste 11: persistencia - recarregar do arquivo");
const outroController = new MidiaController_1.default(new MidiaRepository_1.default(ARQUIVO_TESTE));
console.assert(outroController.listarTodas().length === todas.length, "FALHA: dados nao foram persistidos");
console.log("OK");
if (fs.existsSync(ARQUIVO_TESTE)) {
    fs.unlinkSync(ARQUIVO_TESTE);
}
console.log("\n==== Todos os testes passaram ====");
