import { Apertura } from "../apertura/apertura";
import { Comentario } from "../comentario/comentario";
import { Jugada } from "../jugada/jugada";
import { Jugador } from "../jugador/jugador";
import { Torneo } from "../torneo/torneo";
import { Partida } from "./partida";

export class PartidaDetail extends Partida {

  jugadas: Array<Jugada>;
  jugadores: Array<Jugador>;
  comentarioPartida: Array<Comentario>;

  constructor(
    id: number,
    torneo: Torneo,
    aperturaRealizada: Apertura,
    resultado: string,
    jugadas: Array<Jugada>,
    jugadores: Array<Jugador>,
    comentarioPartida: Array<Comentario>
    ) {
      super(id, torneo, aperturaRealizada, resultado);
      this.jugadas = jugadas;
      this.jugadores = jugadores;
      this.comentarioPartida = comentarioPartida;
  }
}
