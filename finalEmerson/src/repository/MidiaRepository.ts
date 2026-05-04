import Midia from "../model/Midia";
import Database from "../Database";
import { IMidiaRepository } from "../interfaces/IMidiaRepository";
import MidiaNaoEncontradaError from "../exception/MidiaNaoEncontradaError";

export default class MidiaRepository implements IMidiaRepository {

    private database: Database;

    constructor() {
        this.database = Database.getInstance();
    }

    // Persistencia
    public salvar(midia: Midia): void {
        this.database.midias.push(midia);
    }

    public buscarTodos(): Midia[] {
        return this.database.midias;
    }

    // Busca
    public buscarPorId(id: number): Midia {
        for (let i = 0; i < this.database.midias.length; i++) {
            const midia = this.database.midias[i];
            if (midia.getId() === id) {
                return midia;
            }
        }
        throw new MidiaNaoEncontradaError(
            "Midia com id " + id + " nao encontrada."
        );
    }

    public buscarPorTitulo(titulo: string): Midia {
        const tituloMinusculo = titulo.toLowerCase();
        for (let i = 0; i < this.database.midias.length; i++) {
            const midia = this.database.midias[i];
            if (midia.getTitulo().toLowerCase() === tituloMinusculo) {
                return midia;
            }
        }
        throw new MidiaNaoEncontradaError(
            "Midia com titulo '" + titulo + "' nao encontrada."
        );
    }

    // Ordenacao
    public ordenarPorAno(): Midia[] {
        // Faz uma copia do array para nao mexer no original
        const copia: Midia[] = [];
        for (let i = 0; i < this.database.midias.length; i++) {
            copia.push(this.database.midias[i]);
        }

        // Ordenacao por bolha (bubble sort) - compara de dois em dois
        for (let i = 0; i < copia.length; i++) {
            for (let j = 0; j < copia.length - 1 - i; j++) {
                if (copia[j].getAno() > copia[j + 1].getAno()) {
                    const temporario = copia[j];
                    copia[j] = copia[j + 1];
                    copia[j + 1] = temporario;
                }
            }
        }

        return copia;
    }

    public ordenarPorTitulo(): Midia[] {
        // Faz uma copia do array para nao mexer no original
        const copia: Midia[] = [];
        for (let i = 0; i < this.database.midias.length; i++) {
            copia.push(this.database.midias[i]);
        }

        // Ordenacao por bolha comparando titulos em ordem alfabetica
        for (let i = 0; i < copia.length; i++) {
            for (let j = 0; j < copia.length - 1 - i; j++) {
                const tituloA = copia[j].getTitulo().toLowerCase();
                const tituloB = copia[j + 1].getTitulo().toLowerCase();
                if (tituloA > tituloB) {
                    const temporario = copia[j];
                    copia[j] = copia[j + 1];
                    copia[j + 1] = temporario;
                }
            }
        }

        return copia;
    }

}