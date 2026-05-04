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

    //Cadastro
    public cadastrarCD(titulo: string, ano: number, autor: string, faixas: number): CD {
        const cd = new CD(titulo, ano, autor, faixas);
        this.repository.salvar(cd);
        return cd;
    }

    public cadastrarDVD(titulo: string, ano: number, autor: string, duracao: number): DVD {
        const dvd = new DVD(titulo, ano, autor, duracao);
        this.repository.salvar(dvd);
        return dvd;
    }


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
