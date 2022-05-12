import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaModule } from './partida/partida.module';
import { AperturaModule } from './apertura/apertura.module';
import { JugadorModule } from './jugador/jugador.module';
import { JugadaModule } from './jugada/jugada.module';

import { LigaComponent } from './liga/liga.component';
import { ComentarioModule } from './comentario/comentario.module';

@NgModule({
  declarations: [
    AppComponent,
      LigaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidaModule,
    JugadorModule,
    AperturaModule,
    JugadaModule,
    ComentarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
