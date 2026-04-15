import DigitalMedia from "../model/DigitalMedia";
import Film from "../model/Film";
import VideoFile from "../model/VideoFile";

export class DigitalMediaController {
    
    public createNewVideoFile(title: string, year: number, duration: number): VideoFile {
        const video = new VideoFile(title, year, duration);
        return video;
    }

    public createNewFilm(): Film {
        const film = new Film();
        return film;
    }
}
