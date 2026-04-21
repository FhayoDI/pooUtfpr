import AudioFile from "../model/AudioFile";
import VideoFile from "../model/VideoFile";
import { IDigitalMediaRepository } from "../interfaces/IDigitalMediaRepository";

export class InMemoryDigitalMediaRepository implements IDigitalMediaRepository {
  private items: (AudioFile | VideoFile)[] = [];

  public saveAudioFile(audio: AudioFile): void {
    this.items.push(audio);
  }

  public saveVideoFile(video: VideoFile): void {
    this.items.push(video);
  }

  public findAll(): (AudioFile | VideoFile)[] {
    return this.items;
  }
}
