"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalMediaController = void 0;
const Film_1 = __importDefault(require("../model/Film"));
const VideoFile_1 = __importDefault(require("../model/VideoFile"));
class DigitalMediaController {
    // Agora o controller gerencia as instâncias em vez de herdar delas
    createNewVideoFile(title, year, duration) {
        // Instanciamos uma classe concreta (VideoFile) em vez da abstrata (DigitalMedia)
        const video = new VideoFile_1.default(title, year, duration);
        return video;
    }
    createNewFilm() {
        // Film é uma subclasse de ContentType (concreta)
        const film = new Film_1.default();
        return film;
    }
}
exports.DigitalMediaController = DigitalMediaController;
