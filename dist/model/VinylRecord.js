"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalMedia_1 = __importDefault(require("./PhysicalMedia"));
class VinylRecord extends PhysicalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.rpm = 33;
        this.diameter = 12;
        this.sides = 2;
    }
    setRpm(rpm) {
        this.rpm = rpm;
    }
    setDiameter(diameter) {
        this.diameter = diameter;
    }
    setSides(sides) {
        this.sides = sides;
    }
    getRpm() {
        return this.rpm;
    }
    getDiameter() {
        return this.diameter;
    }
    getSides() {
        return this.sides;
    }
}
exports.default = VinylRecord;
