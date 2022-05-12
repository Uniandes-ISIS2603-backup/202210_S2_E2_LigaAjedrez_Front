import { Torneo } from "../torneo/torneo";
import { Liga } from "./liga";

export class LigaDetail extends Liga {
  torneosRealizados : Array<Torneo>;

  constructor(
    nombre: string,
    ciudad: string,
    direccion: string,
    telefono: number,
    enlaceRedesSociales: string,
    torneosRealizados: Array<Torneo>
    ) {
      super(nombre, ciudad, direccion, telefono, enlaceRedesSociales);
      this.torneosRealizados = torneosRealizados;
  }
}
