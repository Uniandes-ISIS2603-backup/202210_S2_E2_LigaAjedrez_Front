import { Component, Input, OnInit } from '@angular/core';
import { Torneo } from '../torneo';

@Component({
  selector: 'app-torneo-detail',
  templateUrl: './torneo-detail.component.html',
  styleUrls: ['./torneo-detail.component.css']
})
export class TorneoDetailComponent implements OnInit {

  @Input() torneoDetail!: Torneo;
  constructor() { }

  ngOnInit() {
  }

}
