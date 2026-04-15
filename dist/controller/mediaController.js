"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
class MediaController {
    // Nota: Media é abstrata, então não podemos dar 'new Media()'
    // Este método agora serve para configurar propriedades comuns de qualquer Media
    setMediaRating(media, rating) {
        media.setRating(rating);
    }
    setMediaContentType(media, contentType) {
        media.setContentType(contentType);
    }
}
exports.MediaController = MediaController;
