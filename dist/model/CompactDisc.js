"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalMedia_1 = __importDefault(require("./PhysicalMedia"));
class CompactDisc extends PhysicalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.isHDCD = false;
    }
    setIsHDCD(isHDCD) {
        this.isHDCD = isHDCD;
    }
    isHdcd() {
        return this.isHDCD;
    }
}
exports.default = CompactDisc;
