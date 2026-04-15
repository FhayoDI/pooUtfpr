"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DigitalMedia_1 = __importDefault(require("./DigitalMedia"));
class AudioFile extends DigitalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.sampleRate = 44100;
        this.channels = 2;
    }
    setSampleRate(sampleRate) {
        this.sampleRate = sampleRate;
    }
    setChannels(channels) {
        this.channels = channels;
    }
    getSampleRate() {
        return this.sampleRate;
    }
    getChannels() {
        return this.channels;
    }
}
exports.default = AudioFile;
