import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidaDetailComponent } from './partida-detail/partida-detail.component';
import { PartidaListComponent } from './partida-list/partida-list.component';
import { PartidaRoutingModule } from './partida-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, PartidaRoutingModule, ReactiveFormsModule],
  exports: [PartidaListComponent, PartidaDetailComponent],
  declarations: [PartidaListComponent, PartidaDetailComponent]
})
export class PartidaModule { }
