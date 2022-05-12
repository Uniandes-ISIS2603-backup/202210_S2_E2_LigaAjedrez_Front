import { Component, OnInit } from '@angular/core';
import { Apertura } from '../apertura';
import { dataAperturas } from '../dataAperturas';

@Component({
  selector: 'app-apertura-list',
  templateUrl: './apertura-list.component.html',
  styleUrls: ['./apertura-list.component.css']
})
export class AperturaListComponent implements OnInit {

  aperturas: Array<Apertura> = [];
  selectedApertura!: Apertura;
  selected = false;

  constructor() { }
  getAperturasList(): Array<Apertura>{
    return dataAperturas;
  }

  onSelected(apertura: Apertura): void{
    this.selected = true;
    this.selectedApertura = apertura;
  }
  ngOnInit() {
    this.aperturas = this.getAperturasList();
  }
}
