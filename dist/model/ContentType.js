"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AudienceRating_1 = require("../enum/AudienceRating");
class ContentType {
    constructor() {
        this.genre = "";
        this.subgenre = "";
        this.audience = AudienceRating_1.AudienceRating.LIVRE;
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
