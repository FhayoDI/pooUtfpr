import Film from "../model/Film";
import VideoFile from "../model/VideoFile";
import AudioFile from "../model/AudioFile";
import { IDigitalMediaRepository } from "../interfaces/IDigitalMediaRepository";

export class DigitalMediaController {

  private repository: IDigitalMediaRepository;

  public constructor(repository: IDigitalMediaRepository) {
    this.repository = repository;
  }

  public createNewVideoFile(title: string, year: number, duration: number): VideoFile {
    const video = new VideoFile(title, year, duration);
    this.repository.saveVideoFile(video);
    return video;
  }

  public createNewAudioFile(title: string, year: number, duration: number): AudioFile {
    const audio = new AudioFile(title, year, duration);
    this.repository.saveAudioFile(audio);
    return audio;
  }

  public createNewFilm(): Film {
    const film = new Film();
    return film;
  }

  public listAll(): (VideoFile | AudioFile)[] {
    return this.repository.findAll();
  }
}
