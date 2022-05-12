import { Partida } from "../partida/partida";
import { Apertura } from "./apertura";

export class AperturaDetail extends Apertura{
  partidas: Array<Partida>;

  constructor(
    id: number,
    nombre: string,
    clasificacion: string,
    movimientos: string,
    partidas: Array<Partida>
  ){
    super(id, nombre, clasificacion, movimientos);
    this.partidas = partidas;
  }
}
