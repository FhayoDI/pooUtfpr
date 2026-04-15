import Media from "../model/Media";
import ContentType from "../model/ContentType";

export class MediaController {
    
    public setMediaRating(media: Media, rating: number): void {
        media.setRating(rating);
    }

    public setMediaContentType(media: Media, contentType: ContentType): void {
        media.setContentType(contentType);
    }
}
