import { Partida } from "../partida/partida";

export class Jugador {


  nombre: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  fotografia: string;
  puntajeElo: number;
  partida : Partida;

  constructor(

    nombre: string,
    fechaNacimiento: string,
    lugarNacimiento: string,
    fotografia: string,
    puntajeElo: number,
    partida : Partida

  )
  {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.fotografia = fotografia;
    this.puntajeElo = puntajeElo;
    this.partida = partida;
  }
}
