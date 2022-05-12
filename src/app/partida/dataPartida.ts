import { Apertura } from "../apertura/apertura";
import { Liga } from "../liga/liga";
import { Torneo } from "../torneo/torneo";
import { Partida } from "./partida";

export const dataPartida = [

  new Partida(1, new Torneo("Torneo_1", 'Bogotá', new Date(12/10/2022), "100.000", new Liga("Liga_1", "Bogotá", "Carrera 7", 22020254, "@ligaAjedrez")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6"), "Gano Blanco"),
  new Partida(2, new Torneo("Torneo_2", 'Cali', new Date(13/10/2022), "120.000", new Liga("Liga_1", "Bogotá", "Carrera 7", 22020254, "@ligaAjedrez")), new Apertura(4,"Española","Abierta","1. d4 c6 2. f4 d5 3. Nf3 Bf5 4. e3 Nf6"), "Gano Negro"),
  new Partida(3, new Torneo("Torneo_3", 'Medellín', new Date(14/10/2022), "150.000", new Liga("Liga_1", "Bogotá", "Carrera 7", 22020254, "@ligaAjedrez")), new Apertura(5,"Stonewall","Super Loca","1. d4 e6 2. e4 d6 3. f4 Be7 4. Nf3 Bd7"), "Gano Blanco"),
  new Partida(4, new Torneo("Torneo_4", 'Cartagena', new Date(15/10/2022), "90.000", new Liga("Liga_1", "Bogotá", "Carrera 7", 22020254, "@ligaAjedrez")), new Apertura(6,"Cangrejo","Categoria Maestro Mundial","1. d4 d5 2. f4 Nf6 3. Nf3 e6 4. e3 Be7"), "Gano Negro")
]
