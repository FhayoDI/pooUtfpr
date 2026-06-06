import { StatusMidia } from "../enum/StatusMidia";
import Genero from "./Genero";
import AnoInvalidoError from "../exception/AnoInvalidoError";
import Identificavel from "./Identificavel";

export default abstract class Midia implements Identificavel {

    private static proximoId: number = 1;

    private id: number;
    private titulo: string;
    private ano: number;
    private autor: string;
    private status: StatusMidia = StatusMidia.DISPONIVEL;
    private genero: Genero;

    constructor(titulo: string, ano: number, autor: string, genero: Genero) {
        if (ano < 1900 || ano > 2026) {
            throw new AnoInvalidoError(ano);
        }
        this.id = Midia.proximoId++;
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
        this.genero = genero;
    }

    
    public abstract descrever(): string;

    public getId(): number {
        return this.id;
    }
    public restaurarId(id: number): void {
        this.id = id;
        if (id >= Midia.proximoId) {
            Midia.proximoId = id + 1;
        }
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public getAno(): number {
        return this.ano;
    }
    public getAutor(): string {
        return this.autor;
    }
    public getGenero(): Genero {
        return this.genero;
    }
    public getStatus(): StatusMidia {
        return this.status;
    }
    public setStatus(status: StatusMidia): void {
        this.status = status;
    }
    public setGenero(genero: Genero): void {
        this.genero = genero;
    }

}
