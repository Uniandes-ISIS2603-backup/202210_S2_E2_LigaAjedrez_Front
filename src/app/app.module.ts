import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaModule } from './partida/partida.module';
import { AperturaModule } from './apertura/apertura.module';
import { JugadorModule } from './jugador/jugador.module';
import { JugadaModule } from './jugada/jugada.module';
import { ComentarioModule } from './comentario/comentario.module';
import { LigaModule } from './liga/liga.module';
import { TorneoModule } from './torneo/torneo.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    PartidaModule,
    JugadorModule,
    AperturaModule,
    TorneoModule,
    JugadaModule,
    ComentarioModule,
    LigaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
