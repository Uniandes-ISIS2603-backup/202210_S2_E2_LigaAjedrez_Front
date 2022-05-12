import { Comentario } from "../comentario/comentario";
import { Jugador } from "../jugador/jugador";
import { Partida } from "../partida/partida";
import { Jugada } from "./jugada";

export class JugadaDetail extends Jugada{

  comentariosJugada: Array<Comentario>



  constructor(
    id: number,
    numeroJugada: number,
    movimiento: string,
    jugador: Jugador,
    partida: Partida,
    comentariosJugada: Array<Comentario>
    ) {
      super(id, numeroJugada, movimiento, jugador, partida);
    this.comentariosJugada = comentariosJugada;
  }
}
