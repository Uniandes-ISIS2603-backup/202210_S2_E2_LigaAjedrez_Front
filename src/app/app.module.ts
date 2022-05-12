import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaModule } from './partida/partida.module';
import { AperturaModule } from './apertura/apertura.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
