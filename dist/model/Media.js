"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Media {
    constructor(title, year, duration) {
        this.rating = 0;
        this.contentType = null;
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.id = Media.nextId++;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setContentType(contentType) {
        this.contentType = contentType;
    }
    getRating() {
        return this.rating;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getYear() {
        return this.year;
    }
    getDuration() {
        return this.duration;
    }
    getContentType() {
        return this.contentType;
    }
}
Media.nextId = 1;
exports.default = Media;
