import { Component } from '@angular/core';
import { DataMejorJugador } from './dataPruebaMainPage';
import { Jugador } from './jugador/jugador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ligaajedrez-front';
  mejorJugador!: Jugador;

  getMejorJugador(): Jugador {

    return DataMejorJugador;
  }

  ngOnInit(){
    this.mejorJugador = this.getMejorJugador();
  }
}


