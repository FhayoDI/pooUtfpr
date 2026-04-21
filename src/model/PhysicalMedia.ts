import Media from "./Media";
import { MediaCondition } from "../enum/MediaCondition";

export default abstract class PhysicalMedia extends Media {
  private condition: MediaCondition = MediaCondition.REGULAR;
  private weightGrams: number = 0;
  private manufacturer: string = "";

  public constructor(title: string, year: number, duration: number) {
    super(title, year, duration);
  }
  public setCondition(condition: MediaCondition): void {
    this.condition = condition;
  }
  public setWeightGrams(weightGrams: number): void {
    this.weightGrams = weightGrams;
  }
  public setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }

  public getCondition(): MediaCondition {
    return this.condition;
  }
  public getWeightGrams(): number {
    return this.weightGrams;
  }
  public getManufacturer(): string {
    return this.manufacturer;
  }
}
