import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorListComponent } from './jugador-list/jugador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[JugadorListComponent],
  declarations: [JugadorListComponent]
})
export class JugadorModule { }
