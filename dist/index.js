"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const digitalMediaController_1 = require("./controller/digitalMediaController");
const mediaController_1 = require("./controller/mediaController");
const DVD_1 = __importDefault(require("./model/DVD"));
// Instanciando os Controllers
const digitalCtrl = new digitalMediaController_1.DigitalMediaController();
const mediaCtrl = new mediaController_1.MediaController();
console.log("--- Demonstração do Sistema de Mídias ---");
// 1. Criando um Filme Digital (DigitalMedia -> VideoFile)
const meuFilme = digitalCtrl.createNewVideoFile("Inception", 2010, 148);
meuFilme.setResolution("1080p");
meuFilme.setFileSize(2500); // 2.5 GB
// Criando o tipo de conteúdo (ContentType -> Film)
const infoFilme = digitalCtrl.createNewFilm();
infoFilme.setGenre("Sci-Fi");
infoFilme.setAudience("14");
infoFilme.setDirector("Christopher Nolan");
// Associando o conteúdo à mídia
mediaCtrl.setMediaContentType(meuFilme, infoFilme);
mediaCtrl.setMediaRating(meuFilme, 9.5);
console.log(`Mídia Criada: ${meuFilme.getTitle()} (${meuFilme.getYear()})`);
console.log(`Resolução: ${meuFilme.getResolution()} | Nota: ${meuFilme.getRating()}`);
console.log(`Diretor: ${infoFilme.getDirector()} | Classificação: ${infoFilme.getAudience()}`);
console.log("\n--- Demonstração de Mídia Física ---");
// 2. Criando um DVD (PhysicalMedia -> DVD)
const meuDVD = new DVD_1.default("The Matrix", 1999, 136);
meuDVD.setCondition("excelente");
meuDVD.setRegion(4);
meuDVD.setWeightGrams(15);
console.log(`DVD Criado: ${meuDVD.getTitle()} (${meuDVD.getYear()})`);
console.log(`Condição: ${meuDVD.getCondition()} | Região: ${meuDVD.getRegion()}`);
console.log("\n--- Fim da Demonstração ---");
