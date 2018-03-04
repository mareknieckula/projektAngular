import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';
import { Zadanie } from '../models/zadanie';

@Component({
  selector: 'app-do-zrobienia',
  templateUrl: './do-zrobienia.component.html',
  styleUrls: ['./do-zrobienia.component.css']
})
export class DoZrobieniaComponent implements OnInit {

  listaZadan: Array<Zadanie> = [];

  constructor(private zadaniaService: ZadaniaService) {
    this.zadaniaService.getListaZadanObs().subscribe((zadania: Array<Zadanie>) => {
      this.listaZadan = zadania;
    });
  }

  ngOnInit() {
  }
  usun(zadanie: Zadanie) {
    this.zadaniaService.usun(zadanie);
  }

  zrobione(zadanie: Zadanie) {
    zadanie.end = new Date();
    this.zadaniaService.zrobione(zadanie);
  }

  getColor(): string {
    return this.listaZadan.length >= 5 ? 'red' : 'green';
  }

}
