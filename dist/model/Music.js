"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentType_1 = __importDefault(require("./ContentType"));
class Music extends ContentType_1.default {
    constructor() {
        super(...arguments);
        this.bpm = 0;
        this.musicalKey = "";
        this.instruments = [];
    }
    setBpm(bpm) {
        this.bpm = bpm;
    }
    setMusicalKey(musicalKey) {
        this.musicalKey = musicalKey;
    }
    addInstrument(instrument) {
        this.instruments.push(instrument);
    }
    getBpm() {
        return this.bpm;
    }
    getMusicalKey() {
        return this.musicalKey;
    }
    getInstruments() {
        return this.instruments;
    }
}
exports.default = Music;
