import {Liga} from "../liga/liga";

export class Torneo {
  nombre: string;
  lugar: string;
  fechaInicio: Date;
  premio: string;
  liga: Liga;

  constructor(
    nombre: string,
    lugar: string,
    fechaInicio: Date,
    premio: string,
    liga: Liga
    ) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.fechaInicio = fechaInicio;
    this.premio = premio;
    this.liga = liga;
  }
 }
