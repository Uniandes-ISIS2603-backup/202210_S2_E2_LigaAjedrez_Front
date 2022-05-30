import { Component, OnInit } from '@angular/core';
import { DataMejorJugador } from '../dataPruebaMainPage';
import { Jugador } from '../jugador/jugador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  mejorJugador!: Jugador;

  getMejorJugador(): Jugador {

    return DataMejorJugador;
  }

  ngOnInit(){
    this.mejorJugador = this.getMejorJugador();
  }

}
