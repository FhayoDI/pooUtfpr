import Media from "./Media";

export default abstract class PhysicalMedia extends Media {
  private condition: "excelente" | "bom" | "regular" | "ruim" = "regular";
  private weightGrams: number = 0;
  private manufacturer: string = "";

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }
  public setCondition(condition: "excelente" | "bom" | "regular" | "ruim",):void {
    this.condition = condition;
  }
  public setWeightGrams(weightGrams: number): void {
    this.weightGrams = weightGrams;
  }
  public setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }

  public getCondition():string {
    return this.condition;
  }
  public getWeightGrams():number {
    return this.weightGrams;
  }
  public getManufacturer():string {
    return this.manufacturer;
  }

}
