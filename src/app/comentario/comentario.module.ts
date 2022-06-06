import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioPartidaListComponent } from './comentario-partida-list/comentario-partida-list.component';
import { ComentarioPartidaDetailComponent } from './comentario-partida-detail/comentario-partida-detail.component';
import { ComentarioJugadaListComponent } from './comentario-jugada-list/comentario-jugada-list.component';
import { ComentarioJugadaDetailComponent } from './comentario-jugada-detail/comentario-jugada-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComentarioPartidaListComponent, ComentarioPartidaDetailComponent,
                 ComentarioJugadaListComponent, ComentarioJugadaDetailComponent],
  exports: [ComentarioPartidaListComponent, ComentarioJugadaListComponent, ComentarioPartidaDetailComponent]
})
export class ComentarioModule { }
