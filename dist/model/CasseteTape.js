"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalMedia_1 = __importDefault(require("./PhysicalMedia"));
const TapeType_1 = require("../enum/TapeType");
class CassetteTape extends PhysicalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.tapeTipo = TapeType_1.TapeType.TIPO_I;
        this.playLength = 0;
    }
    setTapeTipo(tapeTipo) {
        this.tapeTipo = tapeTipo;
    }
    setPlayLength(playLength) {
        this.playLength = playLength;
    }
    getTapeTipo() {
        return this.tapeTipo;
    }
    getPlayLength() {
        return this.playLength;
    }
}
exports.default = CassetteTape;
