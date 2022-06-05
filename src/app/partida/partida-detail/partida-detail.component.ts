import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partida } from '../partida';
import { PartidaService } from '../partida.service';

@Component({
  selector: 'app-partida-detail',
  templateUrl: './partida-detail.component.html',
  styleUrls: ['./partida-detail.component.css']
})
export class PartidaDetailComponent implements OnInit {

  partidaId!: string;
  @Input() partidaDetail!: Partida;

  constructor(
    private route: ActivatedRoute,
    private partidaService: PartidaService
  ) { }

  getPartida(){
    this.partidaService.getPartida(this.partidaId).subscribe((partida: Partida)=>{
      this.partidaDetail = partida;
    })
  }

  ngOnInit() {
    if(this.partidaDetail === undefined){
      this.partidaId = this.route.snapshot.paramMap.get('id')!
      if (this.partidaId) {
        this.getPartida();
      }
    }
  }
}
