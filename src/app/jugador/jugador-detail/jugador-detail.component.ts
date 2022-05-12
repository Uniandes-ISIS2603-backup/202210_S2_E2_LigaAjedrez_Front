import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {

  @Input() jugadorDetail!: Jugador;
  constructor() { }

  ngOnInit() {
  }

}
