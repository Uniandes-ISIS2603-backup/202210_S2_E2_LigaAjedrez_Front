import { Component, OnInit } from '@angular/core';
import { Apertura } from '../apertura';
import { AperturaDetail } from '../apertura-detail';
import { AperturaService } from '../apertura.service';

@Component({
  selector: 'app-apertura-list',
  templateUrl: './apertura-list.component.html',
  styleUrls: ['./apertura-list.component.css']
})
export class AperturaListComponent implements OnInit {

  aperturas: Array<AperturaDetail> = [];
  selectedApertura!: AperturaDetail;
  selected = false;

  constructor( private aperturaService: AperturaService) { }

  getAperturas(): void {
    this.aperturaService.getAperturas().subscribe((aperturas) => {
      this.aperturas = aperturas;
    });
  }

  onSelected(apertura: AperturaDetail): void{
    this.selected = true;
    this.selectedApertura = apertura;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});
  }
  ngOnInit() {
    this.getAperturas();
  }
}
