"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentType_1 = __importDefault(require("./ContentType"));
class Film extends ContentType_1.default {
    constructor() {
        super(...arguments);
        this.director = "";
        this.cast = [];
        this.budget = 0;
    }
    setDirector(director) {
        this.director = director;
    }
    setBudget(budget) {
        this.budget = budget;
    }
    addCast(actor) {
        this.cast.push(actor);
    }
    getDirector() {
        return this.director;
    }
    getCast() {
        return this.cast;
    }
    getBudget() {
        return this.budget;
    }
}
exports.default = Film;
