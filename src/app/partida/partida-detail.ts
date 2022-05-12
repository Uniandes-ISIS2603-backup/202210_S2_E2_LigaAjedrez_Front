import { Apertura } from "../apertura/apertura";
import { Comentario } from "../comentario/comentario";
import { Jugada } from "../jugada/jugada";
import { Jugador } from "../jugador/jugador";
import { Torneo } from "../torneo/torneo";
import { Partida } from "./partida";

export class PartidaDetail extends Partida {
  jugada: Array<Jugada>;
  jugador: Array<Jugador>;
  comentarioPartida: Array<Comentario>;

  constructor(
    id: number,
    torneo: Torneo,
    apertura: Apertura,
    resultado: string,
    jugada: Array<Jugada>,
    jugador: Array<Jugador>,
    comentarioPartida: Array<Comentario>
    ) {
      super(id, torneo, apertura, resultado);
      this.jugada = jugada;
      this.jugador = jugador;
      this.comentarioPartida = comentarioPartida;
  }
}
