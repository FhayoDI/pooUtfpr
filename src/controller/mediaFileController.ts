import Media from "../model/Media";
import ContentType from "../model/ContentType";
import { IDigitalMediaRepository } from "../interfaces/IDigitalMediaRepository";
import { IPhysicalMediaRepository } from "../interfaces/IPhysicalMediaRepository";

export class MediaFileController {

  private digitalRepo: IDigitalMediaRepository;
  private physicalRepo: IPhysicalMediaRepository;

  public constructor(
    digitalRepo: IDigitalMediaRepository,
    physicalRepo: IPhysicalMediaRepository
  ) {
    this.digitalRepo = digitalRepo;
    this.physicalRepo = physicalRepo;
  }

  public setMediaContentType(media: Media, contentType: ContentType): void {
    media.setContentType(contentType);
  }

  public setMediaRating(media: Media, rating: number): void {
    media.setRating(rating);
  }

  public listAllDigital() {
    return this.digitalRepo.findAll();
  }

  public listAllPhysical() {
    return this.physicalRepo.findAll();
  }
}
