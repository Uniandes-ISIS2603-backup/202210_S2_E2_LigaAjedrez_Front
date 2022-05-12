import { Torneo } from "./torneo";

export class TorneoDetail extends Torneo {
  liga : Array<Liga>;
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
      super(nombre, lugar, fechaInicio, premio);
      this.liga = liga;
      this.jugadores = jugadores;
      this.partidas = partidas;
  }
}
