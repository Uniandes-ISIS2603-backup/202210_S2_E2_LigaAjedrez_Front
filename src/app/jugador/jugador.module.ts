import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorListComponent } from './jugador-list/jugador-list.component';
import { JugadorDetailComponent } from './jugador-detail/jugador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[JugadorListComponent, JugadorDetailComponent],
  declarations: [JugadorListComponent,JugadorDetailComponent]
})
export class JugadorModule { }
