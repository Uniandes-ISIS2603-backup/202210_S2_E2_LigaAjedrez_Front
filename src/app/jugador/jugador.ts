import { Partida } from "../partida/partida";

export class Jugador {

  id:number;
  nombre: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  fotografia: string;
  puntajeElo: number;
  partida : Partida;

  constructor(

    id:number,
    nombre: string,
    fechaNacimiento: string,
    lugarNacimiento: string,
    fotografia: string,
    puntajeElo: number,
    partida : Partida

  )
  {
    this.id= id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.fotografia = fotografia;
    this.puntajeElo = puntajeElo;
    this.partida = partida;
  }
}
