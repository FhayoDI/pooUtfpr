import ContentType from "./ContentType";

export default class Music extends ContentType {
  private bpm: number = 0;
  private musicalKey: string = "";
  private instruments: string[] = [];

  public setBpm(bpm: number): void {
    this.bpm = bpm;
  }
  public setMusicalKey(musicalKey: string): void {
    this.musicalKey = musicalKey;
  }
  public addInstrument(instrument: string): void {
    this.instruments.push(instrument);
  }
  public getBpm(): number {
    return this.bpm;
  }
  public getMusicalKey(): string {
    return this.musicalKey;
  }
  public getInstruments(): string[] {
    return this.instruments;
  }
}
