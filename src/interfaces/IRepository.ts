export interface IRepository<T> {

    salvar(item: T): void;
    buscarTodos(): T[];

}
