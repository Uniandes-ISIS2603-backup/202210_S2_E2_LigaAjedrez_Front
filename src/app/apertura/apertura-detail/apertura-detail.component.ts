import { Component, Input, OnInit } from '@angular/core';
import { Apertura } from '../apertura';

@Component({
  selector: 'app-apertura-detail',
  templateUrl: './apertura-detail.component.html',
  styleUrls: ['./apertura-detail.component.css']
})
export class AperturaDetailComponent implements OnInit {

  @Input() aperturaDetail!: Apertura;

  constructor() { }

  ngOnInit() {
  }

}
