export default class Genero {

    private nome: string;
    private descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }

    public getNome(): string {
        return this.nome;
    }
    public getDescricao(): string {
        return this.descricao;
    }

}
