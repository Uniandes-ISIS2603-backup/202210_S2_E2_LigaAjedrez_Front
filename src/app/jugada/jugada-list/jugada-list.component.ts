import { Component, OnInit } from '@angular/core';
import { Jugada } from '../jugada';
import { JugadaService } from '../jugada.service';


@Component({
  selector: 'app-jugada-list',
  templateUrl: './jugada-list.component.html',
  styleUrls: ['./jugada-list.component.css']
})
export class JugadaListComponent implements OnInit {

  jugadasC: Array<Jugada>=[];
  selectedJugada!: Jugada;
  selected = false;

  constructor(private jugadaService: JugadaService) { }

  onSelected(jugada: Jugada): void{
    this.selected = true;
    this.selectedJugada = jugada;
  }

  getJugadasServicio()
  {
    this.jugadaService.getJugadas().subscribe(
      jugadas => {this.jugadasC = jugadas;}
      );
  }

  ngOnInit() {
    this.getJugadasServicio();
  }




}
