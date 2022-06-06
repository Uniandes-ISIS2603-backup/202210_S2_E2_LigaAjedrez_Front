import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AperturaListComponent } from './apertura-list/apertura-list.component';
import { AperturaDetailComponent } from './apertura-detail/apertura-detail.component';
import { RouterModule } from '@angular/router';
import { AperturaRoutingModule } from './apertura-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AperturaRoutingModule
  ],
  exports: [AperturaListComponent],
  declarations: [AperturaListComponent, AperturaDetailComponent]
})
export class AperturaModule { }
