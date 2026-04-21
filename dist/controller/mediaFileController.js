"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFileController = void 0;
class MediaFileController {
    constructor(digitalRepo, physicalRepo) {
        this.digitalRepo = digitalRepo;
        this.physicalRepo = physicalRepo;
    }
    setMediaContentType(media, contentType) {
        media.setContentType(contentType);
    }
    setMediaRating(media, rating) {
        media.setRating(rating);
    }
    listAllDigital() {
        return this.digitalRepo.findAll();
    }
    listAllPhysical() {
        return this.physicalRepo.findAll();
    }
}
exports.MediaFileController = MediaFileController;
