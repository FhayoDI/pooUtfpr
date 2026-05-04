"use strict";
// REQUISITO: Excecao Personalizada
// Igual ao MeuErro do prof: uma classe que extende Error e e lancada
// quando algo da errado em uma situacao especifica do dominio.
// Aqui: lancada quando se busca uma midia que nao existe.
Object.defineProperty(exports, "__esModule", { value: true });
class MidiaNaoEncontradaError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "MidiaNaoEncontradaError";
    }
}
exports.default = MidiaNaoEncontradaError;
