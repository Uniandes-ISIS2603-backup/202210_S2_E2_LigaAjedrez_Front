import { Component, OnInit } from '@angular/core';
import { Torneo } from '../torneo';
import { dataTorneos } from '../dataTorneos';

@Component({
  selector: 'app-torneo-list',
  templateUrl: './torneo-list.component.html',
  styleUrls: ['./torneo-list.component.css']
})
export class TorneoListComponent implements OnInit {
  torneos : Array<Torneo> = [];
  constructor() { }
  getTorneosList() : Array<Torneo> {
    return dataTorneos;
  }
  ngOnInit() {
    this.torneos = this.getTorneosList();
  }

}
