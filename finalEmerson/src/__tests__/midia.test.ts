import MidiaController from "../controller/MidiaController";
import MidiaRepository from "../repository/MidiaRepository";
import Database from "../Database";
import MidiaNaoEncontradaError from "../exception/MidiaNaoEncontradaError";
import AnoInvalidoError from "../exception/AnoInvalidoError";

describe("Sistema de Midias", function() {

    let controller: MidiaController;

    beforeEach(function() {
        Database.getInstance().midias = [];
        controller = new MidiaController(new MidiaRepository());
    });

    test("Teste 1: cadastrar CD e verificar suas propriedades", function() {
        const cd = controller.cadastrarCD("Thriller", 1982, "Michael Jackson", 9);

        expect(cd.getTitulo()).toBe("Thriller");
        expect(cd.getAno()).toBe(1982);
        expect(cd.getNumeroFaixas()).toBe(9);
    });

    test("Teste 2: buscar midia inexistente deve lancar MidiaNaoEncontradaError", function() {
        expect(function() {
            controller.buscar(9999);
        }).toThrow(MidiaNaoEncontradaError);
    });

    test("Teste 3: cadastrar com ano invalido deve lancar AnoInvalidoError", function() {
        expect(function() {
            controller.cadastrarCD("Disco Antigo", 1800, "Artista", 5);
        }).toThrow(AnoInvalidoError);
    });

});
