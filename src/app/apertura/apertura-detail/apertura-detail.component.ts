import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apertura } from '../apertura';
import { AperturaService } from '../apertura.service';

@Component({
  selector: 'app-apertura-detail',
  templateUrl: './apertura-detail.component.html',
  styleUrls: ['./apertura-detail.component.css']
})
export class AperturaDetailComponent implements OnInit {

  aperturaId!: string;
  @Input() aperturaDetail!: Apertura;

  constructor(
    private route: ActivatedRoute,
    private aperturaService: AperturaService) { }

    getApertura(){
      this.aperturaService.getApertura(this.aperturaId).subscribe(apertura=>{
        this.aperturaDetail = apertura;
      })
    }

    ngOnInit() {
      if(this.aperturaDetail === undefined){
        this.aperturaId = this.route.snapshot.paramMap.get('id')!
        if(this.aperturaId){
          this.getApertura();
        }
      }
    }

}
