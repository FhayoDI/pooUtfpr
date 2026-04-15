"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContentType {
    constructor() {
        this.genre = "";
        this.subgenre = "";
        this.audience = "livre";
    }
    setGenre(genre) {
        this.genre = genre;
    }
    setSubgenre(subgenre) {
        this.subgenre = subgenre;
    }
    setAudience(audience) {
        this.audience = audience;
    }
    getGenre() {
        return this.genre;
    }
    getSubgenre() {
        return this.subgenre;
    }
    getAudience() {
        return this.audience;
    }
}
exports.default = ContentType;
