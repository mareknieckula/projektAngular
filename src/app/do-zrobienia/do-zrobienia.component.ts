import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';

@Component({
  selector: 'app-do-zrobienia',
  templateUrl: './do-zrobienia.component.html',
  styleUrls: ['./do-zrobienia.component.css']
})
export class DoZrobieniaComponent implements OnInit {

  listaZadan = [];

  constructor(private zadaniaService: ZadaniaService) {
    this.zadaniaService.getListaZadanObs().subscribe((zadania: Array<string>) => {
      this.listaZadan = zadania;
    });
  }

  ngOnInit() {
  }
  usun(zadanie: string) {
    this.zadaniaService.usun(zadanie);
  }

  zrobione(zadanie: string) {
    this.zadaniaService.zrobione(zadanie);
  }

  getColor(): string {
    return this.listaZadan.length >= 5 ? 'red' : 'green';
  }

}
