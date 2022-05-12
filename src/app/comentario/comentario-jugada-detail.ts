import { Comentario } from "./comentario";

export class ComentarioJugadaDetail extends Comentario{

  constructor(
    id: number,
    valoracionCualitativa: string,
    valoracionCuantitativa: number,
    autor: string,
    fechaPublicacion: any
   ) {
    super(
      id,
      valoracionCualitativa,
      valoracionCuantitativa,
      autor,
      fechaPublicacion
     )
  }
}
