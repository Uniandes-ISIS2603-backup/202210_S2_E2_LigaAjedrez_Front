import { Component, OnInit } from '@angular/core';
import { ComentarioPartidaDetail } from '../comentario-partida-detail';

@Component({
  selector: 'app-comentario-partida-list',
  templateUrl: './comentario-partida-list.component.html',
  styleUrls: ['./comentario-partida-list.component.css']
})
export class ComentarioPartidaListComponent implements OnInit {

  private comentarioPartida: Array<ComentarioPartidaDetail>=[];

  constructor() { }

  ngOnInit() {
    this.comentarioPartida = this.getComentarioPartidaData();
  }

  getComentarioPartidaData(): Array<ComentarioPartidaDetail> {
    //return dataComentarioPartida;
    return new Array<ComentarioPartidaDetail>();
  }
}
