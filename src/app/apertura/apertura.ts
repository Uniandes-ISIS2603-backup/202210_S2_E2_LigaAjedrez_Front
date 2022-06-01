export class Apertura {
  id: number;
  nombre: string;
  clasificacion: string;
  movimientos: string;
  imagen: string;

  constructor(
    id: number,
    nombre: string,
    clasificacion: string,
    movimientos: string,
    imagen: string
  ){
    this.id = id;
    this.nombre = nombre;
    this.clasificacion = clasificacion;
    this.movimientos = movimientos;
    this.imagen = imagen;
  }
}
