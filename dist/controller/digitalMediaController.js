"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalMediaController = void 0;
const Film_1 = __importDefault(require("../model/Film"));
const VideoFile_1 = __importDefault(require("../model/VideoFile"));
const AudioFile_1 = __importDefault(require("../model/AudioFile"));
class DigitalMediaController {
    constructor(repository) {
        this.repository = repository;
    }
    createNewVideoFile(title, year, duration) {
        const video = new VideoFile_1.default(title, year, duration);
        this.repository.saveVideoFile(video);
        return video;
    }
    createNewAudioFile(title, year, duration) {
        const audio = new AudioFile_1.default(title, year, duration);
        this.repository.saveAudioFile(audio);
        return audio;
    }
    createNewFilm() {
        const film = new Film_1.default();
        return film;
    }
    listAll() {
        return this.repository.findAll();
    }
}
exports.DigitalMediaController = DigitalMediaController;
