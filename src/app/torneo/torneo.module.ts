import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorneoListComponent } from './torneo-list/torneo-list.component';
import { TorneoDetailComponent } from './torneo-detail/torneo-detail.component';

@NgModule({
  imports: [CommonModule],
  exports: [TorneoListComponent],
  declarations: [TorneoListComponent, TorneoDetailComponent]
})
export class TorneoModule { }
