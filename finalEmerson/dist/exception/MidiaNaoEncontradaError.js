"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MidiaNaoEncontradaError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "MidiaNaoEncontradaError";
    }
}
exports.default = MidiaNaoEncontradaError;
