import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {

  jugadorId!: string;
  @Input() jugadorDetail!: Jugador;
  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadorService) { }

  getjugador(){
    this.jugadorService.getJugador(this.jugadorId).subscribe((jugador: Jugador)=>{
      this.jugadorDetail = jugador;
    })
  }

  ngOnInit() {
    if(this.jugadorDetail === undefined){
      this.jugadorId = this.route.snapshot.paramMap.get('id')!
      if(this.jugadorId){
        this.getjugador();
      }
    }
  }
}
