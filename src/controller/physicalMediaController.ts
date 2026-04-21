import DVD from "../model/DVD";
import VinylRecord from "../model/VinylRecord";
import CompactDisc from "../model/CompactDisc";
import CassetteTape from "../model/CasseteTape";
import { IPhysicalMediaRepository } from "../interfaces/IPhysicalMediaRepository";

export class PhysicalMediaController {

  private repository: IPhysicalMediaRepository;

  public constructor(repository: IPhysicalMediaRepository) {
    this.repository = repository;
  }

  public createNewDVD(title: string, year: number, duration: number): DVD {
    const dvd = new DVD(title, year, duration);
    this.repository.save(dvd);
    return dvd;
  }

  public createNewVinylRecord(title: string, year: number, duration: number): VinylRecord {
    const vinyl = new VinylRecord(title, year, duration);
    this.repository.save(vinyl);
    return vinyl;
  }

  public createNewCompactDisc(title: string, year: number, duration: number): CompactDisc {
    const cd = new CompactDisc(title, year, duration);
    this.repository.save(cd);
    return cd;
  }

  public createNewCassetteTape(title: string, year: number, duration: number): CassetteTape {
    const tape = new CassetteTape(title, year, duration);
    this.repository.save(tape);
    return tape;
  }

  public listAll() {
    return this.repository.findAll();
  }
}
