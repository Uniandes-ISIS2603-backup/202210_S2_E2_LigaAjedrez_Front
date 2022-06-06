import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorneoListComponent } from './torneo-list/torneo-list.component';
import { TorneoDetailComponent } from './torneo-detail/torneo-detail.component';
import { RouterModule } from '@angular/router';
import { TorneoRoutingModule } from './torneo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TorneoRoutingModule
  ],
  exports: [TorneoListComponent],
  declarations: [TorneoListComponent, TorneoDetailComponent]
})
export class TorneoModule { }
