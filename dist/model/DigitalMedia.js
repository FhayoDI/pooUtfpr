"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Media_1 = __importDefault(require("./Media"));
class DigitalMedia extends Media_1.default {
    constructor(title, year, duration) {
        super(title, year, duration);
        this.fileSize = 0;
        this.codec = "";
        this.bitrate = 0;
        this.drmProtected = false;
    }
    setFileSize(fileSize) {
        this.fileSize = fileSize;
    }
    setCodec(codec) {
        this.codec = codec;
    }
    setBitrate(bitrate) {
        this.bitrate = bitrate;
    }
    setDrmProtected(drmProtected) {
        this.drmProtected = drmProtected;
    }
    getFileSize() {
        return this.fileSize;
    }
    getCodec() {
        return this.codec;
    }
    getBitrate() {
        return this.bitrate;
    }
    isDrmProtected() {
        return this.drmProtected;
    }
}
exports.default = DigitalMedia;
