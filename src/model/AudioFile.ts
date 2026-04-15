import DigitalMedia from "./DigitalMedia";

export default class AudioFile extends DigitalMedia {
  private sampleRate: 44100 | 48000 | 96000 | 192000 = 44100;
  private channels: 1 | 2 | 6 | 8 = 2;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setSampleRate(sampleRate: 44100 | 48000 | 96000 | 192000): void {
    this.sampleRate = sampleRate;
  }
  public setChannels(channels: 1 | 2 | 6 | 8): void {
    this.channels = channels;
  }
  public getSampleRate(): 44100 | 48000 | 96000 | 192000 {
    return this.sampleRate;
  }
  public getChannels(): 1 | 2 | 6 | 8 {
    return this.channels;
  }
}
