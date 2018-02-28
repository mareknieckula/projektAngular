import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-do-zrobienia',
  templateUrl: './do-zrobienia.component.html',
  styleUrls: ['./do-zrobienia.component.css']
})
export class DoZrobieniaComponent implements OnInit {

  @Input()
  listaZadan = [];
  @Output()
  emitZrobione = new EventEmitter<string>();
  @Output()
  emitUsun = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  usun(zadanie: string) {
    this.emitUsun.emit(zadanie);
  }

  zrobione(zadanie: string) {
    this.emitZrobione.emit(zadanie);
  }

  getColor(): string {
    return this.listaZadan.length >= 5 ? 'red' : 'green';
  }

}
