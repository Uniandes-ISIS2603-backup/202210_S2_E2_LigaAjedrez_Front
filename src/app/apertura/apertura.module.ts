import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AperturaListComponent } from './apertura-list/apertura-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AperturaListComponent],
  declarations: [AperturaListComponent]
})
export class AperturaModule { }
