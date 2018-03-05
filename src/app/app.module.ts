import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DodajZadanieComponent } from './dodaj-zadanie/dodaj-zadanie.component';
import { DoZrobieniaComponent } from './do-zrobienia/do-zrobienia.component';
import { ZrobioneZadaniaComponent } from './zrobione-zadania/zrobione-zadania.component';
import { ZadaniaService } from './services/zadania.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformZadaniePipe } from './shared/transform-zadanie.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DodajZadanieComponent,
    DoZrobieniaComponent,
    ZrobioneZadaniaComponent,
    CheckedDirective,
    DateDirective,
    TransformZadaniePipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [ZadaniaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
