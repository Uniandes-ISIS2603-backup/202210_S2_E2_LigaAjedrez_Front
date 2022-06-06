export class Jugador {

  id:number;
  nombre: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  fotografia: string;
  puntajeElo: number;

  constructor(

    id:number,
    nombre: string,
    fechaNacimiento: string,
    lugarNacimiento: string,
    fotografia: string,
    puntajeElo: number,

  )
  {
    this.id= id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.fotografia = fotografia;
    this.puntajeElo = puntajeElo;
  }
}
