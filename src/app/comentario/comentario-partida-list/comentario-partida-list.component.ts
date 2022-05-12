import { Component, OnInit } from '@angular/core';
import { ComentarioPartidaDetail } from '../comentario-partida-detail';
import { dataComentarioPartida } from '../dataComentarioPartida';

@Component({
  selector: 'app-comentario-partida-list',
  templateUrl: './comentario-partida-list.component.html',
  styleUrls: ['./comentario-partida-list.component.css']
})
export class ComentarioPartidaListComponent implements OnInit {

  private comentarioPartida: Array<ComentarioPartidaDetail>=[];

  selectedComentarioPartida!: ComentarioPartidaDetail;
  selected: Boolean = false;

  onSelected(comentarioPartida: ComentarioPartidaDetail): void {
    this.selected = true;
    this.selectedComentarioPartida = comentarioPartida;
  }
  constructor() { }

  ngOnInit() {
    this.comentarioPartida = this.getComentarioPartidaData();
  }

  getComentarioPartidaData(): Array<ComentarioPartidaDetail> {
    return dataComentarioPartida;
  }
}
