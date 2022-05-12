import { Component, OnInit } from '@angular/core';
import { ComentarioJugadaDetail } from '../comentario-jugada-detail';
import { dataComentarioJugada } from '../dataComentarioJugada';


@Component({
  selector: 'app-comentario-jugada-list',
  templateUrl: './comentario-jugada-list.component.html',
  styleUrls: ['./comentario-jugada-list.component.css']
})
export class ComentarioJugadaListComponent implements OnInit {

  private comentarioJugada: Array<ComentarioJugadaDetail>=[];

  selectedComentarioJugada!: ComentarioJugadaDetail;
  selected: Boolean = false;

  onSelected(comentarioJugada: ComentarioJugadaDetail): void {
    this.selected = true;
    this.selectedComentarioJugada = comentarioJugada;
  }

  constructor() { }

  ngOnInit() {
    this.comentarioJugada = this.getComentarioJugadaData()
  }

  getComentarioJugadaData(): Array<ComentarioJugadaDetail> {
    return dataComentarioJugada;
  }

}
