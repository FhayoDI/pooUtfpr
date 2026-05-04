import Midia from "./Midia";

export default class DVD extends Midia {

    private duracaoMinutos: number;

    constructor(titulo: string, ano: number, autor: string, duracaoMinutos: number) {
        super(titulo, ano, autor);
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
