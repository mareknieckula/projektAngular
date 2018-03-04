import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Zadanie } from '../models/zadanie';

@Injectable()
export class ZadaniaService {

  private listaZadan: Array<Zadanie> = [];
  private zrobioneZadania: Array<Zadanie> = [];

  private listaZadanObs = new BehaviorSubject<Array<Zadanie>>([]);
  private zrobioneZadaniaObs = new BehaviorSubject<Array<Zadanie>>([]);
 constructor() {
    this.listaZadan = [
      {name: 'Zakupy', created: new Date()},
      {name: 'Trening', created: new Date()},
      {name: 'Fryzjer', created: new Date()},
      {name: 'Projekt na zaliczenie', created: new Date()}];
    this.listaZadanObs.next(this.listaZadan);
  }

  dodaj(zadanie: Zadanie) {
    this.listaZadan.push(zadanie);
    this.listaZadanObs.next(this.listaZadan);
  }

  usun(zadanie: Zadanie) {
    this.listaZadan = this.listaZadan.filter(e => e !== zadanie);
    this.listaZadanObs.next(this.listaZadan);
  }

  zrobione(zadanie: Zadanie) {
    this.zrobioneZadania.push(zadanie);
    this.usun(zadanie);
    this.zrobioneZadaniaObs.next(this.zrobioneZadania);
  }

  getListaZadanObs(): Observable<Array<Zadanie>> {
    return this.listaZadanObs.asObservable();
  }

  getZrobioneZadaniaObs(): Observable<Array<Zadanie>> {
    return this.zrobioneZadaniaObs.asObservable();
  }
}
