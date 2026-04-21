import AudioFile from "../model/AudioFile";
import Music from "../model/Music";
import { IDigitalMediaRepository } from "../interfaces/IDigitalMediaRepository";

export class AudioFileController {

  private repository: IDigitalMediaRepository;

  public constructor(repository: IDigitalMediaRepository) {
    this.repository = repository;
  }

  public createNewAudioFile(title: string, year: number, duration: number): AudioFile {
    const audio = new AudioFile(title, year, duration);
    this.repository.saveAudioFile(audio);
    return audio;
  }

  public createNewMusic(): Music {
    const music = new Music();
    return music;
  }

  public listAll() {
    return this.repository.findAll();
  }
}
