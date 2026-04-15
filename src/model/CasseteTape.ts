import PhysicalMedia from "./PhysicalMedia";

export default class CassetteTape extends PhysicalMedia {
  private tapeTipo: "Tipo I" | "Tipo II" | "Tipo IV" = "Tipo I";
  private playLength: number = 0;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setTapeTipo(tapeTipo: "Tipo I" | "Tipo II" | "Tipo IV"): void {
    this.tapeTipo = tapeTipo;
  }
  public setPlayLength(playLength: number): void {
    this.playLength = playLength;
  }
  public getTapeTipo(): "Tipo I" | "Tipo II" | "Tipo IV" {
    return this.tapeTipo;
  }
  public getPlayLength(): number {
    return this.playLength;
  }
}
