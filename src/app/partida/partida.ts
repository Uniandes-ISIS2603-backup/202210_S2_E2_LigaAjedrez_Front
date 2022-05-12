import { Apertura } from "../apertura/apertura";
import { Torneo } from "../torneo/torneo";

export class Partida {
  id: number;
  torneo: Torneo;
  aperturaRealizada: Apertura;
  resultado: string;

  constructor(
    id: number,
    torneo: Torneo,
    aperturaRealizada: Apertura,
    resultado: string
    ) {
    this.id = id;
    this.torneo = torneo;
    this.aperturaRealizada = aperturaRealizada;
    this.resultado = resultado;
  }
 }
