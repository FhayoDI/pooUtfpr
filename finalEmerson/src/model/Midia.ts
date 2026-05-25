import { StatusMidia } from "../enum/StatusMidia";
import Genero from "./Genero";
import AnoInvalidoError from "../exception/AnoInvalidoError";

export default abstract class Midia {

    private static proximoId: number = 1;

    private id: number;
    private titulo: string;
    private ano: number;
    private autor: string;
    private status: StatusMidia = StatusMidia.DISPONIVEL;
    private genero!: Genero;

    constructor(titulo: string, ano: number, autor: string) {
        if (ano < 1900 || ano > 2026) {
            throw new AnoInvalidoError(ano);
        }
        this.id = Midia.proximoId++;
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
    }

    
    public abstract descrever(): string;

    public getId(): number {
        return this.id;
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
