import { Component, OnInit } from '@angular/core';
import { Jugada } from '../jugada';
import { JugadaService } from '../jugada.service';
//import { dataJugadas } from '../dataJugadas';


@Component({
  selector: 'app-jugada-list',
  templateUrl: './jugada-list.component.html',
  styleUrls: ['./jugada-list.component.css']
})
export class JugadaListComponent implements OnInit {

  constructor(private jugadaService: JugadaService) { }

  private jugadasC: Array<Jugada>=[];

  ngOnInit() {
  }


  getJugadasData(): Array<Jugada> {
    //return dataJugadas;
    return new Array<Jugada>();
  }


  getJugadasServicio()
  {
    this.jugadaService.getJugadas().subscribe(
      jugadas => {this.jugadasC = jugadas;}
      );
  }

}
