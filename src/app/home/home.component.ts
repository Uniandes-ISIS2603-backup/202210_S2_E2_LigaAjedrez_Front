import { Component, OnInit } from '@angular/core';
import { DataMejorJugador } from '../dataPruebaMainPage';
import { Jugador } from '../jugador/jugador';
import { JugadorService } from '../jugador/jugador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jugadorService: JugadorService) { }

  mejorJugador!: Jugador;

  getMejorJugador(): void {

    this.jugadorService.getJugador('300').subscribe((jugador: Jugador)=>{
      this.mejorJugador = jugador;
    });
  }

  ngOnInit(){
    this.getMejorJugador();
  }

}
