import { Apertura } from "../apertura/apertura";
import { Liga } from "../liga/liga";
import { Torneo } from "../torneo/torneo";
import { Partida } from "./partida";

var nom_liga = new Liga("Liga_1", "Bogotá", "Carrera 7", 22020254, "@ligaAjedrez");

var nom_torneo1 = new Torneo("Torneo_1", 'Bogotá', new Date(12/10/2022), "100.000", nom_liga);
var nom_torneo2 = new Torneo("Torneo_2", 'Cali', new Date(13/10/2022), "120.000", nom_liga);
var nom_torneo3 = new Torneo("Torneo_3", 'Medellín', new Date(14/10/2022), "150.000", nom_liga);
var nom_torneo4 = new Torneo("Torneo_4", 'Cartagena', new Date(15/10/2022), "90.000", nom_liga);

var nom_apertura1 = new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2');
var nom_apertura2 = new Apertura(4,"Española","Abierta","1. d4 c6 2. f4 d5 3. Nf3 Bf5 4. e3 Nf6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2');
var nom_apertura3 = new Apertura(5,"Stonewall","Super Loca","1. d4 e6 2. e4 d6 3. f4 Be7 4. Nf3 Bd7",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2');
var nom_apertura4 = new Apertura(6,"Cangrejo","Categoria Maestro Mundial","1. d4 d5 2. f4 Nf6 3. Nf3 e6 4. e3 Be7",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2');

export const dataPartida = [

  new Partida(1, nom_torneo1, nom_apertura1, "Gano Blanco"),
  new Partida(2, nom_torneo2, nom_apertura1, "Gano Negro"),
  new Partida(3, nom_torneo3, nom_apertura1, "Gano Blanco"),
  new Partida(4, nom_torneo4, nom_apertura1, "Gano Negro")
]
