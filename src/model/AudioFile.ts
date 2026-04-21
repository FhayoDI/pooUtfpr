import DigitalMedia from "./DigitalMedia";
import { SampleRate } from "../enum/SampleRate";
import { AudioChannels } from "../enum/AudioChannels";

export default class AudioFile extends DigitalMedia {
  private sampleRate: SampleRate = SampleRate.SR_44100;
  private channels: AudioChannels = AudioChannels.STEREO;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setSampleRate(sampleRate: SampleRate): void {
    this.sampleRate = sampleRate;
  }
  public setChannels(channels: AudioChannels): void {
    this.channels = channels;
  }
  public getSampleRate(): SampleRate {
    return this.sampleRate;
  }
  public getChannels(): AudioChannels {
    return this.channels;
  }
}
