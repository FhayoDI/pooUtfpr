import PhysicalMedia from "../model/PhysicalMedia";

export interface IPhysicalMediaRepository {
  save(media: PhysicalMedia): void;
  findAll(): PhysicalMedia[];
}
