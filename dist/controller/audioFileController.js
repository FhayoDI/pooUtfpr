"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioFileController = void 0;
const AudioFile_1 = __importDefault(require("../model/AudioFile"));
const Music_1 = __importDefault(require("../model/Music"));
class AudioFileController {
    constructor(repository) {
        this.repository = repository;
    }
    createNewAudioFile(title, year, duration) {
        const audio = new AudioFile_1.default(title, year, duration);
        this.repository.saveAudioFile(audio);
        return audio;
    }
    createNewMusic() {
        const music = new Music_1.default();
        return music;
    }
    listAll() {
        return this.repository.findAll();
    }
}
exports.AudioFileController = AudioFileController;
