import promptSync from "prompt-sync";
import MidiaController from "../controller/MidiaController";
import Genero from "../model/Genero";
import { StatusMidia } from "../enum/StatusMidia";


export default class MenuPrincipal {

    private prompt = promptSync({ sigint: true });
    private controller: MidiaController;

    constructor(controller: MidiaController) {
        this.controller = controller;
    }

    private limparTela(): void {
        console.log("\x1B[2J\x1B[3J\x1B[H");
    }

    public iniciar(): void {
        let aberto: boolean = true;

        while (aberto) {
            this.limparTela();
            this.exibirMenu();


            let opcao: number = -1;
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

    private pausar(): void {
        this.prompt("\nPressione ENTER para continuar...");
    }

    private exibirMenu(): void {
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

    private cadastrarCD(): void {
        const titulo = this.prompt("Titulo: ");
        const ano = parseInt(this.prompt("Ano: "));
        const autor = this.prompt("Autor: ");
        const faixas = parseInt(this.prompt("Numero de faixas: "));
        const generoNome = this.prompt("Genero (ex: Rock): ");

        try {
            const genero = new Genero(generoNome, "Genero musical");
            const cd = this.controller.cadastrarCD(titulo, ano, autor, faixas, genero);
            console.log("CD cadastrado: " + cd.descrever());
        } catch (error: any) {
            console.log("Erro: " + error.message);
        }
    }

    private cadastrarDVD(): void {
        const titulo = this.prompt("Titulo: ");
        const ano = parseInt(this.prompt("Ano: "));
        const autor = this.prompt("Autor/Diretor: ");
        const duracao = parseInt(this.prompt("Duracao (min): "));
        const generoNome = this.prompt("Genero (ex: Drama): ");

        try {
            const genero = new Genero(generoNome, "Genero de filme");
            const dvd = this.controller.cadastrarDVD(titulo, ano, autor, duracao, genero);
            console.log("DVD cadastrado: " + dvd.descrever());
        } catch (error: any) {
            console.log("Erro: " + error.message);
        }
    }

    private listar(midias: ReturnType<MidiaController["listarTodas"]>): void {
        if (midias.length === 0) {
            console.log("Nenhuma midia cadastrada.");
            return;
        }

        midias.forEach(m => console.log(
            "ID " + m.getId() + " | " + m.descrever() +
            " | Status: " + m.getStatus()
        ));
    }

    private buscarMidia(): void {
        const termo = this.prompt("Digite ID (numero) ou titulo: ");

        try {
            const numero = parseInt(termo);
            const midia = isNaN(numero)
                ? this.controller.buscar(termo)
                : this.controller.buscar(numero);
            console.log("Encontrada: " + midia.descrever());
            console.log("Status: " + midia.getStatus());
            console.log("Genero: " + midia.getGenero().getNome());
        } catch (error: any) {
            console.log("Erro: " + error.message);
        } finally {
            console.log("(busca finalizada)");
        }
    }

    private atualizarStatus(): void {
        const id = parseInt(this.prompt("ID da midia: "));
        console.log("Status: 1=DISPONIVEL  2=EMPRESTADA  3=PERDIDA");
        const opcao = parseInt(this.prompt("Novo status: "));

        let novoStatus: StatusMidia;
        if (opcao === 1) novoStatus = StatusMidia.DISPONIVEL;
        else if (opcao === 2) novoStatus = StatusMidia.EMPRESTADA;
        else if (opcao === 3) novoStatus = StatusMidia.PERDIDA;
        else {
            console.log("Opcao invalida.");
            return;
        }

        try {
            this.controller.atualizarMidia(id, undefined, novoStatus);
            console.log("Status atualizado.");
        } catch (error: any) {
            console.log("Erro: " + error.message);
        }
    }

}
