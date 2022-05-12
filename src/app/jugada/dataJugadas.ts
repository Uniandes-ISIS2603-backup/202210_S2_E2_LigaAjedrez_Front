import { Apertura } from "../apertura/apertura";
import { Jugador } from "../jugador/jugador";
import { Liga } from "../liga/liga";
import { Partida } from "../partida/partida";
import { Torneo } from "../torneo/torneo";
import { Jugada } from "./jugada";

export const dataJugadas = [
  new Jugada(1,8, "CalixtoJ8", new Jugador("jairo","2000",
   "Bog","foto",7,
   new Partida(1,new Torneo("Toreno1","Bogota",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion","315","@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"),'resultado')),new Partida())
];





