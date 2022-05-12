import { Component, OnInit } from '@angular/core';
import { dataJugador } from '../dataJugador';
import { Jugador } from '../jugador';

import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

  jugadores: Array<Jugador> = [];
  selected = false;
  selectedJugador!: Jugador;

  constructor(private jugadorService: JugadorService) { }

  getJugadorList(): Array<Jugador>{
    return dataJugador;
  }

  onSelected(jugador: Jugador): void{
    this.selected = true;
    this.selectedJugador = jugador;
  }

  ngOnInit() {
    this.jugadores = this.getJugadorList();
  }

}
