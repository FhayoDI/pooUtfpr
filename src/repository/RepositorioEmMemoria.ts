import { IRepository } from "../interfaces/IRepository";
import Identificavel from "../model/Identificavel";

export default abstract class RepositorioEmMemoria<T extends Identificavel> implements IRepository<T> {

    protected itens: T[] = [];

    public salvar(item: T): void {
        this.itens.push(item);
    }

    public buscarTodos(): T[] {
        return this.itens;
    }

    public buscarPorId(id: number): T | undefined {
        return this.itens.find(item => item.getId() === id);
    }

}
