import { Jugador } from "../jugador/jugador";
import { Partida } from "../partida/partida";

export class Jugada {
  id: number;
  numeroJugada: number;
  movimiento: string;
  jugador: Jugador;
  partida: Partida


  constructor(
    id: number,
    numeroJugada: number,
    movimiento: string,
    jugador: Jugador,
    partida: Partida
    ) {
    this.id = id;
    this.numeroJugada = numeroJugada;
    this.movimiento = movimiento;
    this.jugador = jugador;
    this.partida = partida;
  }
}
