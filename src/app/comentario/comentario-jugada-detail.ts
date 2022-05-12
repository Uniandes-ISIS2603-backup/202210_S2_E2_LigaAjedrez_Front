import { JugadaDetail } from "../jugada/jugada-detail";
import { Comentario } from "./comentario";

export class ComentarioPartidaDetail extends Comentario{

  jugadas: Array<JugadaDetail> = [];

  constructor(
    id: number,
    valoracionCualitativa: string,
    valoracionCuantitativa: number,
    autor: string,
    fechaPublicacion: any,
    jugadas: Array<JugadaDetail>
   ) {
    super(
      id,
      valoracionCualitativa,
      valoracionCuantitativa,
      autor,
      fechaPublicacion
     )
    this.jugadas = jugadas;
  }
}
