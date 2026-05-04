import Midia from "../model/Midia";
import { IRepository } from "./IRepository";

export interface IMidiaRepository extends IRepository<Midia> {

    buscarPorId(id: number): Midia;
    buscarPorTitulo(titulo: string): Midia;
    ordenarPorAno(): Midia[];
    ordenarPorTitulo(): Midia[];

}
