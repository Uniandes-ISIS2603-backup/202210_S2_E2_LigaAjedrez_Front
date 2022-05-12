import { clearScreenDown } from "readline";


export class Apertura {
  id: number;
  nombre: string;
  clasificacion: string;
  movimientos: string;

  constructor(
    id: number,
    nombre: string,
    clasificacion: string,
    movimientos: string
  ){
    this.id = id;
    this.nombre = nombre;
    this.clasificacion = clasificacion;
    this.movimientos = movimientos;
  }
}
