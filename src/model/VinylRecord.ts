import PhysicalMedia from "./PhysicalMedia";

export default class VinylRecord extends PhysicalMedia {
    private rpm: 33 | 45 | 78 = 33;
    private diameter: 7 | 10 | 12 =12;
    private sides: number = 2;

    public constructor(title:string, year:number,duration:number) {
        super(title, year, duration);
    }

    public setRpm(rpm: 33 | 45 | 78): void {
        this.rpm = rpm;
    }

    public setDiameter(diameter: 7 | 10 | 12): void {
        this.diameter = diameter;
    }

    public setSides(sides: number): void {
        this.sides = sides;
    }

    public getRpm():number {
        return this.rpm;
    }

    public getDiameter():number {
        return this.diameter;
    }

    public getSides():number {
        return this.sides;
    }
}