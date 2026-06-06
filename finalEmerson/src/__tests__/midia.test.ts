import * as fs from "fs";
import MidiaController from "../controller/MidiaController";
import MidiaRepository from "../repository/MidiaRepository";
import Genero from "../model/Genero";
import MidiaNaoEncontradaError from "../exception/MidiaNaoEncontradaError";
import AnoInvalidoError from "../exception/AnoInvalidoError";
import { StatusMidia } from "../enum/StatusMidia";

const ARQUIVO_TESTE = "dados.test.json";
const GENERO = new Genero("Rock", "Genero musical");

function limparArquivo(): void {
    if (fs.existsSync(ARQUIVO_TESTE)) {
        fs.unlinkSync(ARQUIVO_TESTE);
    }
}

describe("Sistema de Midias", function() {

    let controller: MidiaController;

    beforeEach(function() {
        limparArquivo();
        controller = new MidiaController(new MidiaRepository(ARQUIVO_TESTE));
    });

    afterAll(function() {
        limparArquivo();
    });

    test("Teste 1: cadastrar CD e verificar suas propriedades", function() {
        const cd = controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 10, GENERO);

        expect(cd.getTitulo()).toBe("Thriller");
        expect(cd.getAno()).toBe(1982);
        expect(cd.getNumeroFaixas()).toBe(10);
        expect(cd.getStatus()).toBe(StatusMidia.DISPONIVEL);
    });

    test("Teste 2: buscar midia inexistente deve lancar MidiaNaoEncontradaError", function() {
        expect(function() {
            controller.buscar(9999);
        }).toThrow(MidiaNaoEncontradaError);
    });

    test("Teste 3: cadastrar com ano invalido deve lancar AnoInvalidoError", function() {
        expect(function() {
            controller.cadastrarCD("Disco Antigo", 1800, "Artista", 5, GENERO);
        }).toThrow(AnoInvalidoError);
    });

    test("Teste 4: sobrescrita - descrever() diferente para CD e DVD", function() {
        const cd = controller.cadastrarCD("Nevermind", 1991, "Nirvana", 13, GENERO);
        const dvd = controller.cadastrarDVD("Matrix", 1999, "Wachowskis", 136, GENERO);

        expect(cd.descrever()).toContain("[CD]");
        expect(dvd.descrever()).toContain("[DVD]");
    });

    test("Teste 5: sobrecarga - buscar por id (number) e por titulo (string)", function() {
        const cd = controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9, GENERO);

        expect(controller.buscar(cd.getId()).getTitulo()).toBe("Thriller");
        expect(controller.buscar("Thriller").getAno()).toBe(1982);
    });

    test("Teste 6: ordenacao por ano", function() {
        controller.cadastrarDVD("Matrix", 1999, "Wachowskis", 136, GENERO);
        controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9, GENERO);

        const ordenadas = controller.listarOrdenadasPorAno();
        expect(ordenadas[0].getAno()).toBe(1982);
        expect(ordenadas[1].getAno()).toBe(1999);
    });

    test("Teste 7: persistencia - dados sobrevivem a um novo repositorio", function() {
        controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9, GENERO);

        const outroController = new MidiaController(new MidiaRepository(ARQUIVO_TESTE));
        const recarregadas = outroController.listarTodas();

        expect(recarregadas.length).toBe(1);
        expect(recarregadas[0].getTitulo()).toBe("Thriller");
        expect(recarregadas[0].descrever()).toContain("[CD]");
    });

});
