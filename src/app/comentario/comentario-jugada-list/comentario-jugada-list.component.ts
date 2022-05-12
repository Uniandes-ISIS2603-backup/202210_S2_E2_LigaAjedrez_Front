import { Component, OnInit } from '@angular/core';
import { ComentarioJugadaDetail } from '../comentario-jugada-detail';


@Component({
  selector: 'app-comentario-jugada-list',
  templateUrl: './comentario-jugada-list.component.html',
  styleUrls: ['./comentario-jugada-list.component.css']
})
export class ComentarioJugadaListComponent implements OnInit {

  private comentarioJugada: Array<ComentarioJugadaDetail>=[];

  constructor() { }

  ngOnInit() {
    this.comentarioJugada = this.getComentarioJugadaData();
  }

  getComentarioJugadaData(): Array<ComentarioJugadaDetail> {
    //return dataComentarioJugada;
    return new Array<ComentarioJugadaDetail>();
  }

}
