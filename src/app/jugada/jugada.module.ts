import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadaDetailComponent } from './jugada-detail/jugada-detail.component';
import { JugadaListComponent } from './jugada-list/jugada-list.component';
import { JugadaRoutingModule } from './jugada-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, JugadaRoutingModule, ReactiveFormsModule],
  exports: [JugadaListComponent],
  declarations: [JugadaListComponent, JugadaDetailComponent]
})
export class JugadaModule { }
