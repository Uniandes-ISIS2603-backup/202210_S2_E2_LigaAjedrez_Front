import { Component, Input, OnInit } from '@angular/core';
import { Liga } from '../liga';

@Component({
  selector: 'app-liga-detail',
  templateUrl: './liga-detail.component.html',
  styleUrls: ['./liga-detail.component.css']
})
export class LigaDetailComponent implements OnInit {
  @Input() ligaDetail!: Liga;
  constructor() { }

  ngOnInit() {
  }

}
