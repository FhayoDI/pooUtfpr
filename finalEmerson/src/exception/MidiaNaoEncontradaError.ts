export default class MidiaNaoEncontradaError extends Error {

    constructor(mensagem: string) {
        super(mensagem);
        this.name = "MidiaNaoEncontradaError";
    }

}
