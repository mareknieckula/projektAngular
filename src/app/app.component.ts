import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  noweZadanie: string;
  listaZadan: Array<string> = [];
  zrobioneZadania: Array<string> = [];

  dodaj() {
    this.listaZadan.push(this.noweZadanie);
    this.noweZadanie = '';
  }

  usun(zadanie: string) {
    this.listaZadan = this.listaZadan.filter(e => e !== zadanie);
  }

  zrobione(zadanie: string) {
    this.zrobioneZadania.push(zadanie);
    this.usun(zadanie);
  }
}
