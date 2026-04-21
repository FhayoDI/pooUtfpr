import PhysicalMedia from "./PhysicalMedia";
import { TapeType } from "../enum/TapeType";

export default class CassetteTape extends PhysicalMedia {
  private tapeTipo: TapeType = TapeType.TIPO_I;
  private playLength: number = 0;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setTapeTipo(tapeTipo: TapeType): void {
    this.tapeTipo = tapeTipo;
  }
  public setPlayLength(playLength: number): void {
    this.playLength = playLength;
  }
  public getTapeTipo(): TapeType {
    return this.tapeTipo;
  }
  public getPlayLength(): number {
    return this.playLength;
  }
}
