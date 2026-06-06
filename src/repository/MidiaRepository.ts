import * as fs from "fs";
import Midia from "../model/Midia";
import CD from "../model/CD";
import DVD from "../model/DVD";
import Genero from "../model/Genero";
import RepositorioEmMemoria from "./RepositorioEmMemoria";
import { IMidiaRepository } from "../interfaces/IMidiaRepository";
import MidiaNaoEncontradaError from "../exception/MidiaNaoEncontradaError";

export default class MidiaRepository extends RepositorioEmMemoria<Midia> implements IMidiaRepository {

    private arquivo: string;

    constructor(arquivo: string = "dados.json") {
        super();
        this.arquivo = arquivo;
        this.carregar();
    }

    public salvar(midia: Midia): void {
        super.salvar(midia);
        this.persistir();
    }

    public buscarPorId(id: number): Midia {
        const midia = super.buscarPorId(id);
        if (!midia) {
            throw new MidiaNaoEncontradaError("Midia com id " + id + " nao encontrada.");
        }
        return midia;
    }

    public buscarPorTitulo(titulo: string): Midia {
        const achada = this.itens.find(m => m.getTitulo().toLowerCase() === titulo.toLowerCase());
        if (!achada) {
            throw new MidiaNaoEncontradaError("Midia com titulo '" + titulo + "' nao encontrada.");
        }
        return achada;
    }

    public ordenarPorAno(): Midia[] {
        return this.itens.slice().sort((a, b) => a.getAno() - b.getAno());
    }

    public ordenarPorTitulo(): Midia[] {
        return this.itens.slice().sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }

    public persistir(): void {
        const lista = this.itens.map(m => ({
            id: m.getId(),
            tipo: m instanceof CD ? "CD" : "DVD",
            titulo: m.getTitulo(),
            ano: m.getAno(),
            autor: m.getAutor(),
            status: m.getStatus(),
            genero: { nome: m.getGenero().getNome(), descricao: m.getGenero().getDescricao() },
            numeroFaixas: m instanceof CD ? m.getNumeroFaixas() : 0,
            duracaoMinutos: m instanceof DVD ? m.getDuracaoMinutos() : 0,
        }));
        fs.writeFileSync(this.arquivo, JSON.stringify(lista, null, 2));
    }

    private carregar(): void {
        if (!fs.existsSync(this.arquivo)) {
            return;
        }
        const lista = JSON.parse(fs.readFileSync(this.arquivo, "utf-8"));
        for (const o of lista) {
            const genero = new Genero(o.genero.nome, o.genero.descricao);
            const midia: Midia = o.tipo === "CD"
                ? new CD(o.titulo, o.ano, o.autor, o.numeroFaixas, genero)
                : new DVD(o.titulo, o.ano, o.autor, o.duracaoMinutos, genero);
            midia.restaurarId(o.id);
            midia.setStatus(o.status);
            this.itens.push(midia);
        }
    }

}
