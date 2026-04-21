"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPhysicalMediaRepository = void 0;
class InMemoryPhysicalMediaRepository {
    constructor() {
        this.items = [];
    }
    save(media) {
        this.items.push(media);
    }
    findAll() {
        return this.items;
    }
}
exports.InMemoryPhysicalMediaRepository = InMemoryPhysicalMediaRepository;
