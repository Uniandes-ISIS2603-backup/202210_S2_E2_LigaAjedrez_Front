import { Jugador } from "../jugador/jugador";
import { Liga } from "../liga/liga";
import { Partida } from "../partida/partida";
import { Torneo } from "./torneo";

export class TorneoDetail extends Torneo {
  jugadores: Array<Jugador>;
  partidas: Array<Partida>;

  constructor(
    nombre: string,
    lugar: string,
    fechaInicio: Date,
    premio: string,
    liga: Liga,
    jugadores: Array<Jugador>,
    partidas: Array<Partida>
    ) {
      super(nombre, lugar, fechaInicio, premio, liga);
            this.jugadores = jugadores;
            this.partidas = partidas;
  }
}
