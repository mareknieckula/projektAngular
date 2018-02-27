import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DodajZadanieComponent } from './dodaj-zadanie/dodaj-zadanie.component';
import { DoZrobieniaComponent } from './do-zrobienia/do-zrobienia.component';
import { ZrobioneZadaniaComponent } from './zrobione-zadania/zrobione-zadania.component';


@NgModule({
  declarations: [
    AppComponent,
    DodajZadanieComponent,
    DoZrobieniaComponent,
    ZrobioneZadaniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
