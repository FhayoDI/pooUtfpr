import ContentType from "./ContentType";

export default abstract class Media {
  private static nextId = 1;
  private id: number;
  private title: string;
  private year: number;
  private duration: number;
  private rating: number = 0;
  private contentType: ContentType | null = null;

  public constructor(title: string, year: number, duration: number) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.id = Media.nextId++;
  }
  public setRating(rating: number): void {
    this.rating = rating;
  }
  public setContentType(contentType: ContentType): void {
    this.contentType = contentType;
  }

  public getRating(): number {
    return this.rating;
  }
  public getId(): number {
    return this.id;
  }
  public getTitle(): string {
    return this.title;  
  }
  public getYear(): number {
    return this.year;
  }
  public getDuration(): number {
    return this.duration;
  }
  public getContentType(): ContentType | null {
    return this.contentType;
  }
}
