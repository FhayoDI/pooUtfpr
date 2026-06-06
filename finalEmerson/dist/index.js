"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MidiaRepository_1 = __importDefault(require("./repository/MidiaRepository"));
const MidiaController_1 = __importDefault(require("./controller/MidiaController"));
const MenuPrincipal_1 = __importDefault(require("./view/MenuPrincipal"));
const repository = new MidiaRepository_1.default();
const controller = new MidiaController_1.default(repository);
const menu = new MenuPrincipal_1.default(controller);
menu.iniciar();
