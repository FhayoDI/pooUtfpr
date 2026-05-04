import Midia from "./Midia";

export default class CD extends Midia {

    private numeroFaixas: number;

    constructor(titulo: string, ano: number, autor: string, numeroFaixas: number) {
        super(titulo, ano, autor);
        this.numeroFaixas = numeroFaixas;
    }

    public descrever(): string {
        return "[CD] " + this.getTitulo() + " - " + this.getAutor() +
               " (" + this.getAno() + "), " + this.numeroFaixas + " faixas";
    }

    public getNumeroFaixas(): number {
        return this.numeroFaixas;
    }

}
