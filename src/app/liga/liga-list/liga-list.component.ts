import { Component, OnInit } from '@angular/core';
import { Liga } from '../liga';
import { dataLigas } from '../dataLigas';

@Component({
  selector: 'app-liga-list',
  templateUrl: './liga-list.component.html',
  styleUrls: ['./liga-list.component.css']
})
export class LigaListComponent implements OnInit {
  ligas : Array<Liga> = [];
  constructor() { }
  getLigasList() : Array<Liga> {
    return dataLigas;
  }
  ngOnInit() {
    this.ligas = this.getLigasList();
  }

}
