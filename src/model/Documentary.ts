import ContentType from "./ContentType";

export default class Documentary extends ContentType {
  private subject: string = "";
  private narrator: string = "";
  private isInteractive: boolean = false;

  public setSubject(subject: string): void {
    this.subject = subject;
  }
  public setNarrator(narrator: string): void {
    this.narrator = narrator;
  }
  public setIsInteractive(isInteractive: boolean): void {
    this.isInteractive = isInteractive;
  }
  public getSubject(): string {
    return this.subject;
  }
  public getNarrator(): string {
    return this.narrator;
  }
  public isInteractiveDoc(): boolean {
    return this.isInteractive;
  }
}
