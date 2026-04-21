"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = __importDefault(require("./Media"));
const MediaCondition_1 = require("../enum/MediaCondition");
class PhysicalMedia extends Media_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.condition = MediaCondition_1.MediaCondition.REGULAR;
        this.weightGrams = 0;
        this.manufacturer = "";
    }
    setCondition(condition) {
        this.condition = condition;
    }
    setWeightGrams(weightGrams) {
        this.weightGrams = weightGrams;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
    getCondition() {
        return this.condition;
    }
    getWeightGrams() {
        return this.weightGrams;
    }
    getManufacturer() {
        return this.manufacturer;
    }
}
exports.default = PhysicalMedia;
