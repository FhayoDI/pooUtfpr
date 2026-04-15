import DigitalMedia from "./DigitalMedia";

export default class VideoFile extends DigitalMedia {
  private resolution: "480p" | "720p" | "1080p" | "4K" | "8K" = "1080p";
  private fps: 24 | 30 | 60 | 120 = 24;
  private hdr: boolean = false;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public getResolution():string {
    return this.resolution;
  }
  public getFps():number {
    return this.fps;
  }
  public isHdr(): boolean {
    return this.hdr;
  }

  public setResolution(resolution: "480p" | "720p" | "1080p" | "4K" | "8K",): void {
    this.resolution = resolution;
  }
  public setFps(fps: 24 | 30 | 60 | 120): void {
    this.fps = fps;
  }
  public setHdr(hdr: boolean): void {
    this.hdr = hdr;
  }
}
