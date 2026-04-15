import PhysicalMedia from "./PhysicalMedia";

export default class DVD extends PhysicalMedia {
  private region: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 4;
  private sides: 1 | 2 = 1;
  private layers: 1 | 2 = 1;

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }

  public setRegion(region: 0 | 1 | 2 | 3 | 4 | 5 | 6): void {
    this.region = region;
  }
  public setSides(sides: 1 | 2): void {
    this.sides = sides;
  }
  public setLayers(layers: 1 | 2): void {
    this.layers = layers;
  }
  public getRegion():number{
    return this.region;
  }
  public getSides():number{
    return this.sides;
  }
  public getLayers():number{
    return this.layers;
  }

}
