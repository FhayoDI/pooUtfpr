export default class AnoInvalidoError extends Error {

    constructor(ano: number) {
        super("Ano invalido: " + ano + ". Informe um ano entre 1900 e 2026.");
        this.name = "AnoInvalidoError";
    }

}
