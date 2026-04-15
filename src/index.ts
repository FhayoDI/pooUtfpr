import { DigitalMediaController } from "./controller/digitalMediaController";
import { MediaController } from "./controller/mediaController";
import DVD from "./model/DVD";

const digitalCtrl = new DigitalMediaController();
const mediaCtrl = new MediaController();

console.log("--- Demonstração do Sistema de Mídias ---");

const meuFilme = digitalCtrl.createNewVideoFile("Inception", 2010, 148);
meuFilme.setResolution("1080p");
meuFilme.setFileSize(2500); 

const infoFilme = digitalCtrl.createNewFilm();
infoFilme.setGenre("Sci-Fi");
infoFilme.setAudience("14");
infoFilme.setDirector("Christopher Nolan");

mediaCtrl.setMediaContentType(meuFilme, infoFilme);
mediaCtrl.setMediaRating(meuFilme, 9.5);

console.log(`Mídia Criada: ${meuFilme.getTitle()} (${meuFilme.getYear()})`);
console.log(`Resolução: ${meuFilme.getResolution()} | Nota: ${meuFilme.getRating()}`);
console.log(`Diretor: ${infoFilme.getDirector()} | Classificação: ${infoFilme.getAudience()}`);

console.log("\n--- Demonstração de Mídia Física ---");

const meuDVD = new DVD("The Matrix", 1999, 136);
meuDVD.setCondition("excelente");
meuDVD.setRegion(4);
meuDVD.setWeightGrams(15);

console.log(`DVD Criado: ${meuDVD.getTitle()} (${meuDVD.getYear()})`);
console.log(`Condição: ${meuDVD.getCondition()} | Região: ${meuDVD.getRegion()}`);

console.log("\n--- Fim da Demonstração ---");
