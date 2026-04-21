import PhysicalMedia from "../model/PhysicalMedia";
import { IPhysicalMediaRepository } from "../interfaces/IPhysicalMediaRepository";

export class InMemoryPhysicalMediaRepository implements IPhysicalMediaRepository {
  private items: PhysicalMedia[] = [];

  public save(media: PhysicalMedia): void {
    this.items.push(media);
  }

  public findAll(): PhysicalMedia[] {
    return this.items;
  }
}
