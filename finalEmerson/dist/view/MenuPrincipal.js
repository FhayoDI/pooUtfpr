"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Genero_1 = __importDefault(require("../model/Genero"));
const StatusMidia_1 = require("../enum/StatusMidia");
class MenuPrincipal {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)({ sigint: true });
        this.controller = controller;
    }
    limparTela() {
        console.log("\x1B[2J\x1B[3J\x1B[H");
    }
    iniciar() {
        let aberto = true;
        while (aberto) {
            this.limparTela();
            this.exibirMenu();
            let opcao = -1;
            while (true) {
                const entrada = this.prompt("Escolha: ");
                if (entrada === null) {
                    return;
                }
                const num = parseInt(entrada);
                if (!isNaN(num)) {
                    opcao = num;
                    break;
                }
            }
            switch (opcao) {
                case 1:
                    this.cadastrarCD();
                    this.pausar();
                    break;
                case 2:
                    this.cadastrarDVD();
                    this.pausar();
                    break;
                case 3:
                    this.listar(this.controller.listarTodas());
                    this.pausar();
                    break;
                case 4:
                    this.listar(this.controller.listarOrdenadasPorAno());
                    this.pausar();
                    break;
                case 5:
                    this.listar(this.controller.listarOrdenadasPorTitulo());
                    this.pausar();
                    break;
                case 6:
                    this.buscarMidia();
                    this.pausar();
                    break;
                case 7:
                    this.atualizarStatus();
                    this.pausar();
                    break;
                case 0:
                    console.log("Saindo...");
                    aberto = false;
                    break;
                default:
                    console.log("Opcao invalida.");
                    this.pausar();
            }
        }
    }
    pausar() {
        this.prompt("\nPressione ENTER para continuar...");
    }
    exibirMenu() {
        console.log("=== Gerenciador de Midias ===");
        console.log("1. Cadastrar CD");
        console.log("2. Cadastrar DVD");
        console.log("3. Listar todas");
        console.log("4. Listar ordenadas por ano");
        console.log("5. Listar ordenadas por titulo");
        console.log("6. Buscar midia");
        console.log("7. Atualizar status de midia");
        console.log("0. Sair");
    }
    cadastrarCD() {
        const titulo = this.prompt("Titulo: ");
        const ano = parseInt(this.prompt("Ano: "));
        const autor = this.prompt("Autor: ");
        const faixas = parseInt(this.prompt("Numero de faixas: "));
        const generoNome = this.prompt("Genero (ex: Rock): ");
        try {
            const genero = new Genero_1.default(generoNome, "Genero musical");
            const cd = this.controller.cadastrarCD(titulo, ano, autor, faixas, genero);
            console.log("CD cadastrado: " + cd.descrever());
        }
        catch (error) {
            console.log("Erro: " + error.message);
        }
    }
    cadastrarDVD() {
        const titulo = this.prompt("Titulo: ");
        const ano = parseInt(this.prompt("Ano: "));
        const autor = this.prompt("Autor/Diretor: ");
        const duracao = parseInt(this.prompt("Duracao (min): "));
        const generoNome = this.prompt("Genero (ex: Drama): ");
        try {
            const genero = new Genero_1.default(generoNome, "Genero de filme");
            const dvd = this.controller.cadastrarDVD(titulo, ano, autor, duracao, genero);
            console.log("DVD cadastrado: " + dvd.descrever());
        }
        catch (error) {
            console.log("Erro: " + error.message);
        }
    }
    listar(midias) {
        if (midias.length === 0) {
            console.log("Nenhuma midia cadastrada.");
            return;
        }
        midias.forEach(m => console.log("ID " + m.getId() + " | " + m.descrever() +
            " | Status: " + m.getStatus()));
    }
    buscarMidia() {
        const termo = this.prompt("Digite ID (numero) ou titulo: ");
        try {
            const numero = parseInt(termo);
            const midia = isNaN(numero)
                ? this.controller.buscar(termo)
                : this.controller.buscar(numero);
            console.log("Encontrada: " + midia.descrever());
            console.log("Status: " + midia.getStatus());
            console.log("Genero: " + midia.getGenero().getNome());
        }
        catch (error) {
            console.log("Erro: " + error.message);
        }
        finally {
            console.log("(busca finalizada)");
        }
    }
    atualizarStatus() {
        const id = parseInt(this.prompt("ID da midia: "));
        console.log("Status: 1=DISPONIVEL  2=EMPRESTADA  3=PERDIDA");
        const opcao = parseInt(this.prompt("Novo status: "));
        let novoStatus;
        if (opcao === 1)
            novoStatus = StatusMidia_1.StatusMidia.DISPONIVEL;
        else if (opcao === 2)
            novoStatus = StatusMidia_1.StatusMidia.EMPRESTADA;
        else if (opcao === 3)
            novoStatus = StatusMidia_1.StatusMidia.PERDIDA;
        else {
            console.log("Opcao invalida.");
            return;
        }
        try {
            this.controller.atualizarMidia(id, undefined, novoStatus);
            console.log("Status atualizado.");
        }
        catch (error) {
            console.log("Erro: " + error.message);
        }
    }
}
exports.default = MenuPrincipal;
