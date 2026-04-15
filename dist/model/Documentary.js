"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentType_1 = __importDefault(require("./ContentType"));
class Documentary extends ContentType_1.default {
    constructor() {
        super(...arguments);
        this.subject = "";
        this.narrator = "";
        this.isInteractive = false;
    }
    setSubject(subject) {
        this.subject = subject;
    }
    setNarrator(narrator) {
        this.narrator = narrator;
    }
    setIsInteractive(isInteractive) {
        this.isInteractive = isInteractive;
    }
    getSubject() {
        return this.subject;
    }
    getNarrator() {
        return this.narrator;
    }
    isInteractiveDoc() {
        return this.isInteractive;
    }
}
exports.default = Documentary;
