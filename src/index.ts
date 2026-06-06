import MidiaRepository from "./repository/MidiaRepository";
import MidiaController from "./controller/MidiaController";
import MenuPrincipal from "./view/MenuPrincipal";

const repository = new MidiaRepository();
const controller = new MidiaController(repository);
const menu       = new MenuPrincipal(controller);

menu.iniciar();
