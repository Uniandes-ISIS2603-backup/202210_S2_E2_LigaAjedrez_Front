import { Component, OnInit } from '@angular/core';
import { Partida } from '../partida';
import { PartidaService } from '../partida.service';

@Component({
  selector: 'app-partida-list',
  templateUrl: './partida-list.component.html',
  styleUrls: ['./partida-list.component.css']
})
export class PartidaListComponent implements OnInit {

  partidas: Array<Partida> = [];
  selectedPartida!: Partida;
  selected: Boolean = false;

  constructor(private partidaService: PartidaService) { }

  onSelected(Partida: Partida): void {
    this.selected = true;
    this.selectedPartida = Partida;
  }

  getPartidasList(): void{
    this.partidaService.getPartidas().subscribe((partidas) => {
      this.partidas = partidas;
    });
  }

  ngOnInit() {
    this.getPartidasList();
  }
}
