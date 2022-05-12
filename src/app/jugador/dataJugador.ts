import { Apertura } from "../apertura/apertura"
import { Liga } from "../liga/liga"
import { Partida } from "../partida/partida"
import { Torneo } from "../torneo/torneo"
import { Jugador } from "./jugador"

var liga = new Liga("Liga 1","Bogota","Direccion",315,"@liga1");
var torneo = new Torneo("Toreno1","Bogota",new Date(2020/20/20),"Premio",liga);
var apertura = new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6");
var partida = new Partida(1, torneo, apertura,"Gana Blancas")

export const dataJugador = [


  new Jugador("Jairo","2000",
   "Bog","foto",7,
   new Partida(1,new Torneo("Torneo2","Bogota",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"),'resultado')),
  new Jugador("Carlos","2000",
   "Bog","foto",7,
   new Partida(1,new Torneo("Torneo3","Medellin",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"),'resultado')),
  new Jugador("Felipe","2000",
   "Bog","foto",7,
   new Partida(1,new Torneo("Torneo4","Cali",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"),'resultado')),
  new Jugador("Sergio","2020","med","foto",3,partida)

]



