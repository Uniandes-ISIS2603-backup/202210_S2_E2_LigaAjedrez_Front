import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorListComponent } from './jugador-list/jugador-list.component';
import { JugadorDetailComponent } from './jugador-detail/jugador-detail.component';
import { RouterModule } from '@angular/router';
import { JugadorRoutingModule } from './jugador-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    JugadorRoutingModule
  ],
  exports:[JugadorListComponent, JugadorDetailComponent],
  declarations: [JugadorListComponent,JugadorDetailComponent]
})
export class JugadorModule { }
