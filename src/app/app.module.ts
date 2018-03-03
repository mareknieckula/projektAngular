import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DodajZadanieComponent } from './dodaj-zadanie/dodaj-zadanie.component';
import { DoZrobieniaComponent } from './do-zrobienia/do-zrobienia.component';
import { ZrobioneZadaniaComponent } from './zrobione-zadania/zrobione-zadania.component';
import { ZadaniaService } from './services/zadania.service';


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
  providers: [ZadaniaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
