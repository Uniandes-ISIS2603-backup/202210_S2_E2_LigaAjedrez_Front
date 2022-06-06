import { Partida } from "../partida/partida";
import { Torneo } from "../torneo/torneo";
import { Jugador } from "./jugador";

export class JugadorDetail extends Jugador {

  torneos: Array<Torneo>;
  partidas: Array<Partida>;

  constructor(

    id:number,
    nombre: string,
    fechaNacimiento: string,
    lugarNacimiento: string,
    fotografia: string,
    puntajeElo: number,
    torneos: Array<Torneo>,
    partidas : Array<Partida>
    )
  {
    super(id, nombre, fechaNacimiento, lugarNacimiento, fotografia, puntajeElo);
    this.torneos = torneos;
    this.partidas = partidas;
  }
}
