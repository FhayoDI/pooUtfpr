"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDigitalMediaRepository = void 0;
class InMemoryDigitalMediaRepository {
    constructor() {
        this.items = [];
    }
    saveAudioFile(audio) {
        this.items.push(audio);
    }
    saveVideoFile(video) {
        this.items.push(video);
    }
    findAll() {
        return this.items;
    }
}
exports.InMemoryDigitalMediaRepository = InMemoryDigitalMediaRepository;
