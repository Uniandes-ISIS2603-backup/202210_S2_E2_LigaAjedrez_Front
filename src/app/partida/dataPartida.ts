import { Apertura } from "../apertura/apertura";
import { Liga } from "../liga/liga";
import { Torneo } from "../torneo/torneo";
import { Partida } from "./partida";

export const dataPartida = [
  new Partida(1, new Torneo("Torneo_1", 'Bogotá', new Date(12/10/2022), "100.000", new Liga("Liga_1", "Bogotá", "Carrera 7", "22020254", "@ligaAjedrez")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"), "Gano Blanco")
]
