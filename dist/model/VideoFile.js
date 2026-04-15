"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DigitalMedia_1 = __importDefault(require("./DigitalMedia"));
class VideoFile extends DigitalMedia_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.resolution = "1080p";
        this.fps = 24;
        this.hdr = false;
    }
    getResolution() {
        return this.resolution;
    }
    getFps() {
        return this.fps;
    }
    isHdr() {
        return this.hdr;
    }
    setResolution(resolution) {
        this.resolution = resolution;
    }
    setFps(fps) {
        this.fps = fps;
    }
    setHdr(hdr) {
        this.hdr = hdr;
    }
}
exports.default = VideoFile;
