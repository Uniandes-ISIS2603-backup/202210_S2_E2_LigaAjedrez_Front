import { Component, OnInit } from '@angular/core';
import { dataPartida } from '../dataPartida';
import { Partida } from '../partida';

@Component({
  selector: 'app-partida-list',
  templateUrl: './partida-list.component.html',
  styleUrls: ['./partida-list.component.css']
})
export class PartidaListComponent implements OnInit {

  partidas: Array<Partida> = [];
  constructor() { }

  selectedPartida!: Partida;
  selected: Boolean = false;

  onSelected(Partida: Partida): void {
    this.selected = true;
    this.selectedPartida = Partida;
  }


  getPartidasList(): Array<Partida>{
    return dataPartida;
  }
  ngOnInit() {
    this.partidas = this.getPartidasList();
  }
}
