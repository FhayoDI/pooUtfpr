import AudioFile from "../model/AudioFile";
import VideoFile from "../model/VideoFile";

export interface IDigitalMediaRepository {
  saveAudioFile(audio: AudioFile): void;
  saveVideoFile(video: VideoFile): void;
  findAll(): (AudioFile | VideoFile)[];
}
