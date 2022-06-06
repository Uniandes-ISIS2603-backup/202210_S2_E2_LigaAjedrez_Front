import { Component, OnInit } from '@angular/core';
import { Liga } from '../liga';
import { LigaService } from '../liga.service';

@Component({
  selector: 'app-liga-list',
  templateUrl: './liga-list.component.html',
  styleUrls: ['./liga-list.component.css']
})
export class LigaListComponent implements OnInit {
  ligas : Array<Liga> = [];

  constructor(private ligaService: LigaService) { }

  getLigas() : void {
    this.ligaService.getLigas().subscribe((ligas: Liga[]) => {
      this.ligas = ligas;
    });

  }
  ngOnInit() {
    this.getLigas();
  }

}
