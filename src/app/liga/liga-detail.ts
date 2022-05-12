import { Liga } from "./liga";

export class LigaDetail extends Liga {
  torneosRealizados : Array<Torneos>;

  constructor(
    nombre: string,
    ciudad: string,
    direccion: string,
    telefono: string,
    enlaceRedesSociales: string,
    torneosRealizados: Array<Torneos>
    ) {
      super(nombre, ciudad, direccion, telefono, enlaceRedesSociales);
      this.torneosRealizados = torneosRealizados;
}
