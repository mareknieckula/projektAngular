import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listaZadan: Array<string> = [];
  zrobioneZadania: Array<string> = [];

  dodaj(zadanie: string) {
    this.listaZadan.push(zadanie);
  }

  usun(zadanie: string) {
    this.listaZadan = this.listaZadan.filter(e => e !== zadanie);
  }

  zrobione(zadanie: string) {
    this.zrobioneZadania.push(zadanie);
    this.usun(zadanie);
  }
}
