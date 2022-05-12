import { PartidaDetail } from "../partida/partida-detail";
import { Comentario } from "./comentario";

export class ComentarioPartidaDetail extends Comentario{

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
