import { Apertura } from "./apertura/apertura";
import { Jugador } from "./jugador/jugador";
import { Liga } from "./liga/liga";
import { Partida } from "./partida/partida";
import { Torneo } from "./torneo/torneo";


var liga = new Liga("Liga 1","Bogota","Direccion",315,"@liga1");
var torneo = new Torneo("Toreno1","Bogota",new Date(2020/20/20),"Premio",liga);
var apertura = new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6");
var partida = new Partida(1, torneo, apertura,"Gana Blancas")

export const DataMejorJugador =  new Jugador("Jairo","2000-05-26", "Bogotá", "https://thispersondoesnotexist.com/image",7, partida)
