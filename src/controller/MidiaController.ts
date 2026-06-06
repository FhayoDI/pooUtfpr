import Midia from "../model/Midia";
import CD from "../model/CD";
import DVD from "../model/DVD";
import Genero from "../model/Genero";
import { IMidiaRepository } from "../interfaces/IMidiaRepository";
import { StatusMidia } from "../enum/StatusMidia";


export default class MidiaController {

    private repository: IMidiaRepository;

    constructor(repository: IMidiaRepository) {
        this.repository = repository;
    }

    public cadastrarCD(titulo: string, ano: number, autor: string, faixas: number, genero: Genero): CD {
        const cd = new CD(titulo, ano, autor, faixas, genero);
        this.repository.salvar(cd);
        return cd;
    }

    public cadastrarDVD(titulo: string, ano: number, autor: string, duracao: number, genero: Genero): DVD {
        const dvd = new DVD(titulo, ano, autor, duracao, genero);
        this.repository.salvar(dvd);
        return dvd;
    }


    public buscar(id: number): Midia;
    public buscar(titulo: string): Midia;
    public buscar(termo: number | string): Midia {
        if (typeof termo === "number") {
            return this.repository.buscarPorId(termo);
        } else {
            return this.repository.buscarPorTitulo(termo);
        }
    }

    public atualizarMidia(id: number, genero?: Genero, status?: StatusMidia): void {
        const midia = this.repository.buscarPorId(id);
        if (genero) {
            midia.setGenero(genero);
        }
        if (status) {
            midia.setStatus(status);
        }
        // grava a alteracao no arquivo
        this.repository.persistir();
    }

    //Listagem
    public listarTodas(): Midia[] {
        return this.repository.buscarTodos();
    }

    public listarOrdenadasPorAno(): Midia[] {
        return this.repository.ordenarPorAno();
    }

    public listarOrdenadasPorTitulo(): Midia[] {
        return this.repository.ordenarPorTitulo();
    }

}
