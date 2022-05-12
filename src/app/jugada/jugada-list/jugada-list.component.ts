import { Component, OnInit } from '@angular/core';
import { dataJugadas } from '../dataJugadas';
import { Jugada } from '../jugada';
import { JugadaService } from '../jugada.service';


@Component({
  selector: 'app-jugada-list',
  templateUrl: './jugada-list.component.html',
  styleUrls: ['./jugada-list.component.css']
})
export class JugadaListComponent implements OnInit {

  constructor(private jugadaService: JugadaService) { }

  private jugadasC: Array<Jugada>=[];

  ngOnInit() {
    //this.getJugadasServicio();
  }

  selectedJugada!: Jugada;
  selected = false;

  onSelected(jugada: Jugada): void{
    this.selected = true;
    this.selectedJugada = jugada;
  }


  getJugadasData(): Array<Jugada> {
    //return dataJugadas;
    return dataJugadas;
  }


  getJugadasServicio()
  {
    this.jugadaService.getJugadas().subscribe(
      jugadas => {this.jugadasC = jugadas;}
      );
  }

}
