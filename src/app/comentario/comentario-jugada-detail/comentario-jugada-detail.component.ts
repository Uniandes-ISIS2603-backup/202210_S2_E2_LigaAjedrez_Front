import { Component, Input, OnInit } from '@angular/core';
import { ComentarioJugadaDetail } from '../comentario-jugada-detail';

@Component({
  selector: 'app-comentario-jugada-detail',
  templateUrl: './comentario-jugada-detail.component.html',
  styleUrls: ['./comentario-jugada-detail.component.css']
})
export class ComentarioJugadaDetailComponent implements OnInit {

  @Input() comentarioJugadaDetail!: ComentarioJugadaDetail;


  constructor() { }

  ngOnInit() {
  }

}
