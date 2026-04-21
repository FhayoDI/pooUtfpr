import ContentType from "./ContentType";

export default class Film extends ContentType {
  private director: string = "";
  private cast: string[] = [];
  private budget: number = 0;

  public setDirector(director: string): void {
    this.director = director;
  }
  public setBudget(budget: number): void {
    this.budget = budget;
  }
  public addCast(actor: string): void {
    this.cast.push(actor);
  }
  public getDirector(): string {
    return this.director;
  }
  public getCast(): string[] {
    return this.cast;
  }
  public getBudget(): number {
    return this.budget;
  }
}
