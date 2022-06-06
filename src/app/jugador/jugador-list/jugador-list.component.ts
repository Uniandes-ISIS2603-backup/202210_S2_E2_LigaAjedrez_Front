import { Component, OnInit } from '@angular/core';
import { JugadorDetail } from '../jugador-detail';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

  jugadores: Array<JugadorDetail> = [];
  selected = false;
  selectedJugador!: JugadorDetail;

  constructor(private jugadorService: JugadorService) { }

  getJugadores(): void{
    this.jugadorService.getJugadores().subscribe((jugadores: JugadorDetail[]) => {
      this.jugadores = jugadores;
    });
  }

  onSelected(jugador: JugadorDetail): void{
    this.selected = true;
    this.selectedJugador = jugador;
  }

  ngOnInit() {
    this.getJugadores();
  }

}
