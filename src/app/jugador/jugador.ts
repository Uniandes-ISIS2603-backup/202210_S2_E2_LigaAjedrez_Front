import { lutimes } from "fs";
import * as internal from "stream";
import { runInThisContext } from "vm";
import { Partida } from "../partida/partida";

export class Jugador {


  nombre: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  fotografia: string;
  puntajeElo: internal;
  partida = Partida;

  constructor(

    nombre: string,
    fechaNacimiento: string,
    lugarNacimiento: string,
    fotografia: string,
    puntajeElo: internal,
    partida = Partida

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
