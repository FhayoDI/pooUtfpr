import MidiaRepository from "./repository/MidiaRepository";
import MidiaController from "./controller/MidiaController";
import Genero from "./model/Genero";
import { StatusMidia } from "./enum/StatusMidia";
import MidiaNaoEncontradaError from "./exception/MidiaNaoEncontradaError";

console.log("==== Iniciando testes ====\n");

const repository = new MidiaRepository();
const controller = new MidiaController(repository);

// Teste 1: cadastro de CD 
console.log("Teste 1: cadastrar CD");
const cd = controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9);
console.assert(cd.getTitulo() === "Thriller", "FALHA: titulo errado");
console.assert(cd.getAno() === 1982, "FALHA: ano errado");
console.assert(cd.getStatus() === StatusMidia.DISPONIVEL, "FALHA: status inicial deve ser DISPONIVEL");
console.log("OK");

//  Teste 2: cadastro de DVD 
console.log("\nTeste 2: cadastrar DVD");
const dvd = controller.cadastrarDVD("Matrix", 1999, "Wachowskis", 136);
console.assert(dvd.getTitulo() === "Matrix", "FALHA: titulo errado");
console.assert(dvd.getDuracaoMinutos() === 136, "FALHA: duracao errada");
console.log("OK");

//  Teste 3: sobrescrita do metodo descrever 
console.log("\nTeste 3: sobrescrita - descrever() deve ser diferente para CD e DVD");
console.assert(cd.descrever().includes("[CD]"), "FALHA: descricao do CD nao tem [CD]");
console.assert(dvd.descrever().includes("[DVD]"), "FALHA: descricao do DVD nao tem [DVD]");
console.log("CD: " + cd.descrever());
console.log("DVD: " + dvd.descrever());
console.log("OK");

// Teste 4: associacao Midia-Genero 
console.log("\nTeste 4: associacao com Genero");
const rock = new Genero("Rock", "Genero musical com guitarras eletricas");
cd.setGenero(rock);
console.assert(cd.getGenero().getNome() === "Rock", "FALHA: genero nao foi setado");
console.log("OK");

//  Teste 5: sobrecarga de buscar (por id) 
console.log("\nTeste 5: sobrecarga buscar() - por ID (number)");
const achadoPorId = controller.buscar(cd.getId());
console.assert(achadoPorId.getTitulo() === "Thriller", "FALHA: nao achou por id");
console.log("OK");

//  Teste 6: sobrecarga de buscar (por titulo) 
console.log("\nTeste 6: sobrecarga buscar() - por TITULO (string)");
const achadoPorTitulo = controller.buscar("Matrix");
console.assert(achadoPorTitulo.getAno() === 1999, "FALHA: nao achou por titulo");
console.log("OK");

//  Teste 7: excecao personalizada 
console.log("\nTeste 7: excecao MidiaNaoEncontradaError");
let lancouExcecao = false;
try {
    controller.buscar(9999);
} catch (error: any) {
    if (error instanceof MidiaNaoEncontradaError) {
        lancouExcecao = true;
    }
}
console.assert(lancouExcecao, "FALHA: deveria ter lancado MidiaNaoEncontradaError");
console.log("OK");

//  este 8: atualizar status 
console.log("\nTeste 8: atualizarMidia (parametros opcionais)");
controller.atualizarMidia(cd.getId(), undefined, StatusMidia.EMPRESTADA);
console.assert(cd.getStatus() === StatusMidia.EMPRESTADA, "FALHA: status nao mudou");
console.log("OK");

// Teste 9: ordenacao por ano 
console.log("\nTeste 9: ordenar por ano");
controller.cadastrarCD("Nevermind", 1991, "Nirvana", 13);
const ordenadas = controller.listarOrdenadasPorAno();
console.assert(ordenadas[0].getAno() === 1982, "FALHA: primeiro deveria ser de 1982");
console.assert(ordenadas[ordenadas.length - 1].getAno() === 1999, "FALHA: ultimo deveria ser de 1999");
console.log("OK");

// Teste 10: polimorfismo na lista 
console.log("\nTeste 10: polimorfismo - lista mista chamando descrever()");
const todas = controller.listarTodas();
todas.forEach(m => {
    const desc = m.descrever();
    console.assert(desc.length > 0, "FALHA: descrever vazio");
    console.log("  " + desc);
});
console.log("OK");

console.log("\n==== Todos os testes passaram ====");
