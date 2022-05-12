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
  constructor() { }
  getAperturasList(): Array<Apertura>{
    return dataAperturas;
  }
  ngOnInit() {
    this.aperturas = this.getAperturasList();
  }
}
