import { Jugada } from "../jugada/jugada";
import { Jugador } from "../jugador/jugador";
import { Partida } from "./partida";

export class PartidaDetail extends Partida {
  jugada: Array<Jugada>;
  jugador: Array<Jugador>;
  comentarioPartida: Array<ComentarioPartida>;

  constructor(
    id: number,
    torneo: Torneo,
    apertura: Apertura,
    resultado: string,
    jugada: Array<Jugada>,
    jugador: Array<Jugador>,
    comentarioPartida: Array<ComentarioPartida>
    ) {
      super(id, torneo, apertura, resultado);
      this.jugada = jugada;
      this.jugador = jugador;
      this.comentarioPartida = comentarioPartida;
  }
}
