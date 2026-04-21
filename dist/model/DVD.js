"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalMedia_1 = __importDefault(require("./PhysicalMedia"));
class DVD extends PhysicalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.region = 4;
        this.sides = 1;
        this.layers = 1;
    }
    setRegion(region) {
        this.region = region;
    }
    setSides(sides) {
        this.sides = sides;
    }
    setLayers(layers) {
        this.layers = layers;
    }
    getRegion() {
        return this.region;
    }
    getSides() {
        return this.sides;
    }
    getLayers() {
        return this.layers;
    }
}
exports.default = DVD;
