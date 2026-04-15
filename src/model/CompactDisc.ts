import PhysicalMedia from "./PhysicalMedia";

export default class CompactDisc extends PhysicalMedia {
  private isHDCD: boolean = false;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }
  
  public setIsHDCD(isHDCD: boolean): void {
    this.isHDCD = isHDCD;
  }
  public isHdcd(): boolean {
    return this.isHDCD;
  }

}
