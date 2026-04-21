import { AudienceRating } from "../enum/AudienceRating";

export default abstract class ContentType {
  private genre: string = "";
  private subgenre: string = "";
  private audience: AudienceRating = AudienceRating.LIVRE;

  public setGenre(genre: string): void {
    this.genre = genre;
  }
  public setSubgenre(subgenre: string): void {
    this.subgenre = subgenre;
  }
  public setAudience(audience: AudienceRating): void {
    this.audience = audience;
  }
  public getGenre(): string {
    return this.genre;
  }
  public getSubgenre(): string {
    return this.subgenre;
  }
  public getAudience(): AudienceRating {
    return this.audience;
  }
}
