export class Torneo {
  nombre: string;
  lugar: string;
  fechaInicio: Date;
  premio: string;

  constructor(
    nombre: string,
    lugar: string,
    fechaInicio: Date,
    premio: string,
    ) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.fechaInicio = fechaInicio;
    this.premio = premio;
  }
 }
