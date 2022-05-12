import { PartidaDetail } from "../partida/partida-detail";
import { Comentario } from "./comentario";

export class ComentarioPartidaDetail extends Comentario{

  partidas: Array<PartidaDetail> = [];

  constructor(
    id: number,
    valoracionCualitativa: string,
    valoracionCuantitativa: number,
    autor: string,
    fechaPublicacion: any,
    partidas: Array<PartidaDetail>
   ) {
    super(
      id,
      valoracionCualitativa,
      valoracionCuantitativa,
      autor,
      fechaPublicacion
     )
    this.partidas = partidas;
  }
}
