export default abstract class ContentType {
  private genre: string = "";
  private subgenre: string = "";
  private audience: "livre" | "10" | "12" | "14" | "16" | "18" = "livre";

  public setGenre(genre: string): void {
    this.genre = genre;
  }
  public setSubgenre(subgenre: string): void {
    this.subgenre = subgenre;
  }
  public setAudience(
    audience: "livre" | "10" | "12" | "14" | "16" | "18",): void {
    this.audience = audience;
  }
  public getGenre(): string {
    return this.genre;
  }
  public getSubgenre(): string {
    return this.subgenre;
  }
  public getAudience(): "livre" | "10" | "12" | "14" | "16" | "18" {
    return this.audience;
  }

}
