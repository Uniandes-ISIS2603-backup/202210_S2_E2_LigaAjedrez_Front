import { Component, Input, OnInit } from '@angular/core';
import { ComentarioPartidaDetail } from '../comentario-partida-detail';

@Component({
  selector: 'app-comentario-partida-detail',
  templateUrl: './comentario-partida-detail.component.html',
  styleUrls: ['./comentario-partida-detail.component.css']
})
export class ComentarioPartidaDetailComponent implements OnInit {

  @Input() comentarioPartidaDetail!: ComentarioPartidaDetail;

  constructor() { }

  ngOnInit() {
  }

}
