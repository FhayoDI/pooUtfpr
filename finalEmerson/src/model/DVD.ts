import Midia from "./Midia";
import Genero from "./Genero";

export default class DVD extends Midia {

    private duracaoMinutos: number;

    constructor(titulo: string, ano: number, autor: string, duracaoMinutos: number, genero: Genero) {
        super(titulo, ano, autor, genero);
        this.duracaoMinutos = duracaoMinutos;
    }

    public descrever(): string {
        return "[DVD] " + this.getTitulo() + " - " + this.getAutor() +
               " (" + this.getAno() + "), " + this.duracaoMinutos + " min";
    }

    public getDuracaoMinutos(): number {
        return this.duracaoMinutos;
    }

}
