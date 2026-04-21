"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalMediaController = void 0;
const DVD_1 = __importDefault(require("../model/DVD"));
const VinylRecord_1 = __importDefault(require("../model/VinylRecord"));
const CompactDisc_1 = __importDefault(require("../model/CompactDisc"));
const CasseteTape_1 = __importDefault(require("../model/CasseteTape"));
class PhysicalMediaController {
    constructor(repository) {
        this.repository = repository;
    }
    createNewDVD(title, year, duration) {
        const dvd = new DVD_1.default(title, year, duration);
        this.repository.save(dvd);
        return dvd;
    }
    createNewVinylRecord(title, year, duration) {
        const vinyl = new VinylRecord_1.default(title, year, duration);
        this.repository.save(vinyl);
        return vinyl;
    }
    createNewCompactDisc(title, year, duration) {
        const cd = new CompactDisc_1.default(title, year, duration);
        this.repository.save(cd);
        return cd;
    }
    createNewCassetteTape(title, year, duration) {
        const tape = new CasseteTape_1.default(title, year, duration);
        this.repository.save(tape);
        return tape;
    }
    listAll() {
        return this.repository.findAll();
    }
}
exports.PhysicalMediaController = PhysicalMediaController;
