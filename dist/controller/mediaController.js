"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
class MediaController {
    setMediaRating(media, rating) {
        media.setRating(rating);
    }
    setMediaContentType(media, contentType) {
        media.setContentType(contentType);
    }
}
exports.MediaController = MediaController;
