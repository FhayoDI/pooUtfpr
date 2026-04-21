import { DigitalMediaController } from "./controller/digitalMediaController";
import { PhysicalMediaController } from "./controller/physicalMediaController";
import { AudioFileController } from "./controller/audioFileController";
import { MediaFileController } from "./controller/mediaFileController";

import { InMemoryDigitalMediaRepository } from "./repository/InMemoryDigitalMediaRepository";
import { InMemoryPhysicalMediaRepository } from "./repository/InMemoryPhysicalMediaRepository";

import { VideoResolution } from "./enum/VideoResolution";
import { MediaCondition } from "./enum/MediaCondition";
import { AudienceRating } from "./enum/AudienceRating";
import { SampleRate } from "./enum/SampleRate";
import { AudioChannels } from "./enum/AudioChannels";
import { TapeType } from "./enum/TapeType";

// --- Criação dos repositórios (implementações concretas)
const digitalRepo = new InMemoryDigitalMediaRepository();
const physicalRepo = new InMemoryPhysicalMediaRepository();

// --- Injeção de dependência via construtor
const digitalCtrl = new DigitalMediaController(digitalRepo);
const audioCtrl   = new AudioFileController(digitalRepo);
const physicalCtrl = new PhysicalMediaController(physicalRepo);
const mediaFileCtrl = new MediaFileController(digitalRepo, physicalRepo);

console.log("=== Demonstração: Mídias Digitais ===");

const meuFilme = digitalCtrl.createNewVideoFile("Inception", 2010, 148);
meuFilme.setResolution(VideoResolution.FULL_HD);
meuFilme.setFileSize(2500);
meuFilme.setHdr(true);

const infoFilme = digitalCtrl.createNewFilm();
infoFilme.setGenre("Sci-Fi");
infoFilme.setAudience(AudienceRating.QUATORZE);
infoFilme.setDirector("Christopher Nolan");

mediaFileCtrl.setMediaContentType(meuFilme, infoFilme);
mediaFileCtrl.setMediaRating(meuFilme, 9.5);

console.log(`Filme: ${meuFilme.getTitle()} (${meuFilme.getYear()})`);
console.log(`Resolução: ${meuFilme.getResolution()} | HDR: ${meuFilme.isHdr()} | Nota: ${meuFilme.getRating()}`);
console.log(`Diretor: ${infoFilme.getDirector()} | Classificação: ${infoFilme.getAudience()}`);

console.log("\n=== Demonstração: Arquivo de Áudio ===");

const meuAudio = audioCtrl.createNewAudioFile("Dark Side of the Moon", 1973, 43);
meuAudio.setSampleRate(SampleRate.SR_96000);
meuAudio.setChannels(AudioChannels.STEREO);

const infoMusica = audioCtrl.createNewMusic();
infoMusica.setGenre("Rock Progressivo");
infoMusica.setBpm(120);
infoMusica.addInstrument("Guitarra");
infoMusica.addInstrument("Sintetizador");

mediaFileCtrl.setMediaContentType(meuAudio, infoMusica);

console.log(`Áudio: ${meuAudio.getTitle()} (${meuAudio.getYear()})`);
console.log(`Sample Rate: ${meuAudio.getSampleRate()} Hz | Canais: ${meuAudio.getChannels()}`);
console.log(`Gênero: ${infoMusica.getGenre()} | BPM: ${infoMusica.getBpm()}`);

console.log("\n=== Demonstração: Mídias Físicas ===");

const meuDVD = physicalCtrl.createNewDVD("The Matrix", 1999, 136);
meuDVD.setCondition(MediaCondition.EXCELENTE);
meuDVD.setRegion(4);
meuDVD.setWeightGrams(15);

const meuVinil = physicalCtrl.createNewVinylRecord("Abbey Road", 1969, 47);
meuVinil.setCondition(MediaCondition.BOM);
meuVinil.setManufacturer("Apple Records");

const meuCassete = physicalCtrl.createNewCassetteTape("Greatest Hits", 1995, 60);
meuCassete.setTapeTipo(TapeType.TIPO_II);
meuCassete.setPlayLength(60);

console.log(`DVD: ${meuDVD.getTitle()} | Condição: ${meuDVD.getCondition()} | Região: ${meuDVD.getRegion()}`);
console.log(`Vinil: ${meuVinil.getTitle()} | Condição: ${meuVinil.getCondition()} | Fabricante: ${meuVinil.getManufacturer()}`);
console.log(`Cassete: ${meuCassete.getTitle()} | Tipo: ${meuCassete.getTapeTipo()} | Duração: ${meuCassete.getPlayLength()} min`);

console.log("\n=== Listagem dos Repositórios ===");
console.log(`Total de mídias digitais salvas: ${mediaFileCtrl.listAllDigital().length}`);
console.log(`Total de mídias físicas salvas: ${mediaFileCtrl.listAllPhysical().length}`);

console.log("\n=== Fim da Demonstração ===");
