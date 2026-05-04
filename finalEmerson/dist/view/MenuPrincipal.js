"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Genero_1 = __importDefault(require("../model/Genero"));
const StatusMidia_1 = require("../enum/StatusMidia");
// REQUISITO: MVC - View
// Camada que conversa com o usuario (menu de texto). NUNCA acessa
// o Repository ou Database diretamente - tudo passa pelo Controller.
//
// REQUISITO: try / catch / finally
// Quando o usuario pesquisa uma midia, o repository pode lancar
// MidiaNaoEncontradaError. Aqui pegamos o erro e mostramos uma
// mensagem amigavel ao inves de quebrar o programa.
class MenuPrincipal {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)({ sigint: true });
        this.controller = controller;
    }
    // Limpa a tela DE VERDADE (incluindo scrollback no Linux/Mac/Windows Terminal)
    // \x1B[2J = limpa tela | \x1B[3J = limpa scrollback | \x1B[H = move cursor pro topo
    limparTela() {
        console.log("\x1B[2J\x1B[3J\x1B[H");
    }
    iniciar() {
        let aberto = true;
        while (aberto) {
            this.limparTela();
            this.exibirMenu();
            // Loop interno: so sai quando o usuario digita um numero valido.
            // Assim o menu NAO e redesenhado a cada Enter vazio/invalido.
            let opcao = -1;
            while (true) {
                const entrada = this.prompt("Escolha: ");
                if (entrada === null) {
                    return; // Ctrl+C
                }
                const num = parseInt(entrada);
                if (!isNaN(num)) {
                    opcao = num;
                    break;
                }
                // Se invalido, so pede de novo na mesma tela (sem redesenhar)
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
    // Pausa para o usuario ler o resultado antes de voltar ao menu
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
        const cd = this.controller.cadastrarCD(titulo, ano, autor, faixas);
        cd.setGenero(new Genero_1.default(generoNome, "Genero musical"));
        console.log("CD cadastrado: " + cd.descrever());
    }
    cadastrarDVD() {
        const titulo = this.prompt("Titulo: ");
        const ano = parseInt(this.prompt("Ano: "));
        const autor = this.prompt("Autor/Diretor: ");
        const duracao = parseInt(this.prompt("Duracao (min): "));
        const generoNome = this.prompt("Genero (ex: Drama): ");
        const dvd = this.controller.cadastrarDVD(titulo, ano, autor, duracao);
        dvd.setGenero(new Genero_1.default(generoNome, "Genero de filme"));
        console.log("DVD cadastrado: " + dvd.descrever());
    }
    listar(midias) {
        if (midias.length === 0) {
            console.log("Nenhuma midia cadastrada.");
            return;
        }
        // REQUISITO: Polimorfismo
        // descrever() chama a versao certa para cada subclasse (CD ou DVD)
        // automaticamente, sem precisar saber qual e o tipo concreto.
        midias.forEach(m => console.log("ID " + m.getId() + " | " + m.descrever() +
            " | Status: " + m.getStatus()));
    }
    // REQUISITO: try / catch / finally - aqui usamos!
    buscarMidia() {
        const termo = this.prompt("Digite ID (numero) ou titulo: ");
        try {
            // Se o termo for so numero, vira number; senao, vai como string.
            // Isso aciona a SOBRECARGA do metodo buscar() no controller.
            const valor = isNaN(parseInt(termo)) ? termo : parseInt(termo);
            const midia = this.controller.buscar(valor);
            console.log("Encontrada: " + midia.descrever());
            console.log("Status: " + midia.getStatus());
            if (midia.getGenero()) {
                console.log("Genero: " + midia.getGenero().getNome());
            }
        }
        catch (error) {
            // Captura a excecao personalizada (MidiaNaoEncontradaError)
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
            // Chama atualizarMidia passando so o status (sobrecarga em acao!)
            this.controller.atualizarMidia(id, undefined, novoStatus);
            console.log("Status atualizado.");
        }
        catch (error) {
            console.log("Erro: " + error.message);
        }
    }
}
exports.default = MenuPrincipal;
