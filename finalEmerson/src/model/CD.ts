import Midia from "./Midia";
import Genero from "./Genero";

export default class CD extends Midia {

    private numeroFaixas: number;

    constructor(titulo: string, ano: number, autor: string, numeroFaixas: number, genero: Genero) {
        super(titulo, ano, autor, genero);
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
