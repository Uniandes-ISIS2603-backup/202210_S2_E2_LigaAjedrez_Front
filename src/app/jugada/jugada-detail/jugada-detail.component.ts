import { Component, Input, OnInit } from '@angular/core';
import { Jugada } from '../jugada';

@Component({
  selector: 'app-jugada-detail',
  templateUrl: './jugada-detail.component.html',
  styleUrls: ['./jugada-detail.component.css']
})
export class JugadaDetailComponent implements OnInit {

  @Input() jugadaDetail!: Jugada;

  constructor() { }


  ngOnInit() {
  }

}
