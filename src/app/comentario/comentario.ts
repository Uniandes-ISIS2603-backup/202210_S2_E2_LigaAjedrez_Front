export class Comentario {
 id: number;
 valoracionCualitativa: string;
 valoracionCuantitativa: number;
 autor: string;
 fechaPublicacion: any;

 constructor(
  id: number,
  valoracionCualitativa: string,
  valoracionCuantitativa: number,
  autor: string,
  fechaPublicacion: any,
 ) {
  this.id = id;
  this.valoracionCualitativa = valoracionCualitativa;
  this.valoracionCuantitativa = valoracionCuantitativa;
  this.autor = autor;
  this.fechaPublicacion = fechaPublicacion;
 }
}
