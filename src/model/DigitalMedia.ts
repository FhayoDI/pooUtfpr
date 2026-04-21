import Media from "./Media";

export default abstract class DigitalMedia extends Media {
  private fileSize: number = 0;
  private codec: string = "";
  private bitrate: number = 0;
  private drmProtected: boolean = false;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setFileSize(fileSize: number): void {
    this.fileSize = fileSize;
  }
  public setCodec(codec: string): void {
    this.codec = codec;
  }
  public setBitrate(bitrate: number): void {
    this.bitrate = bitrate;
  }
  public setDrmProtected(drmProtected: boolean): void {
    this.drmProtected = drmProtected;
  }

  public getFileSize():number {
    return this.fileSize;
  }
  public getCodec():string {
    return this.codec;
  }
  public getBitrate():number {
    return this.bitrate;
  }
  public isDrmProtected():boolean {
    return this.drmProtected;
  }
}
