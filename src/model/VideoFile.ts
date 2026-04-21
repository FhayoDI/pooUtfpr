import DigitalMedia from "./DigitalMedia";
import { VideoResolution } from "../enum/VideoResolution";
import { VideoFps } from "../enum/VideoFps";

export default class VideoFile extends DigitalMedia {
  private resolution: VideoResolution = VideoResolution.FULL_HD;
  private fps: VideoFps = VideoFps.FPS_24;
  private hdr: boolean = false;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public getResolution(): VideoResolution {
    return this.resolution;
  }
  public getFps(): VideoFps {
    return this.fps;
  }
  public isHdr(): boolean {
    return this.hdr;
  }

  public setResolution(resolution: VideoResolution): void {
    this.resolution = resolution;
  }
  public setFps(fps: VideoFps): void {
    this.fps = fps;
  }
  public setHdr(hdr: boolean): void {
    this.hdr = hdr;
  }
}
