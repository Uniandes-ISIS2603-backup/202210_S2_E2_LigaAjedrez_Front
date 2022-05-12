import { Component, Input, OnInit } from '@angular/core';
import { Partida } from '../partida';

@Component({
  selector: 'app-partida-detail',
  templateUrl: './partida-detail.component.html',
  styleUrls: ['./partida-detail.component.css']
})
export class PartidaDetailComponent implements OnInit {

  @Input() partidaDetail!: Partida;

  constructor() { }

  ngOnInit() {
  }
}
