import { Apertura } from "../apertura/apertura"
import { Liga } from "../liga/liga"
import { Partida } from "../partida/partida"
import { Torneo } from "../torneo/torneo"
import { Jugador } from "./jugador"

var liga = new Liga("Liga 1","Bogota","Direccion",315,"@liga1");
var torneo = new Torneo("Toreno1","Bogota",new Date(2020/20/20),"Premio",liga);
var apertura = new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2');
var partida = new Partida(1, torneo, apertura,"Gana Blancas")

export const dataJugador = [


  new Jugador(1,"Jairo","2000",
   "Bogotá","foto",7,
   new Partida(1,new Torneo("Torneo2","Bogota",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2'),'resultado')),
  new Jugador(2,"Carlos","2002",
   "Barraquilla","foto",7,
   new Partida(1,new Torneo("Torneo3","Medellin",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2'),'resultado')),
  new Jugador(3,"Felipe","1998",
   "Cartagena","foto",7,
   new Partida(1,new Torneo("Torneo4","Cali",new Date(12/10/2022),"Premio",new Liga("Liga 1","Bogota","Direccion",315,"@liga1")), new Apertura(1,"Inglesa","Cerrada","1. d4 d5 2. f4 Nf6 3. Nf3 c5 4. c3 Nc6",'https://www.chess.com/dynboard?board=green&fen=r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R&piece=neo&size=2'),'resultado')),
  new Jugador(4,"Sergio","1985","Medellin","foto",3,partida)

]



