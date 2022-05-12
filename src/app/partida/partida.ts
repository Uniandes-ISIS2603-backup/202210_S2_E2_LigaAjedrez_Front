import { Apertura } from "../apertura/apertura";
import { Torneo } from "../torneo/torneo";

export class Partida {
  id: number;
  torneo: Torneo;
  apertura: Apertura;
  resultado: string;

  constructor(
    id: number,
    torneo: Torneo,
    apertura: Apertura,
    resultado: string
    ) {
    this.id = id;
    this.torneo = torneo;
    this.apertura = apertura;
    this.resultado = resultado;
  }
 }
