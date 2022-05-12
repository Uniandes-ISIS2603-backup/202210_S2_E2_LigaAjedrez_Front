import { Partida } from "../partida/partida";
import { Jugada } from "./jugada";

export class JugadaDetail extends Jugada{

  comentariosJugada: Array<ComentarioJugada>



  constructor(
    id: number,
    numeroJugada: number,
    movimiento: string,
    jugador: Jugador,
    partida: Partida,
    comentariosJugada: Array<ComentarioJugada>
    ) {
      super(id, numeroJugada, movimiento, jugador, partida);
    this.comentariosJugada = comentariosJugada;
  }
}
