import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ZadaniaService {

  private listaZadan: Array<string> = [];
  private zrobioneZadania: Array<string> = [];

  private listaZadanObs = new BehaviorSubject<Array<string>>(this.listaZadan);
  private zrobioneZadaniaObs = new BehaviorSubject<Array<string>>(this.listaZadan);
 constructor() {
    this.listaZadan = ['Zakupy', 'Trening', 'Fryzjer', 'Projekt na zaliczenie'];
    this.listaZadanObs.next(this.listaZadan);
  }

  dodaj(zadanie: string) {
    this.listaZadan.push(zadanie);
    this.listaZadanObs.next(this.listaZadan);
  }

  usun(zadanie: string) {
    this.listaZadan = this.listaZadan.filter(e => e !== zadanie);
    this.listaZadanObs.next(this.listaZadan);
  }

  zrobione(zadanie: string) {
    this.zrobioneZadania.push(zadanie);
    this.usun(zadanie);
    this.zrobioneZadaniaObs.next(this.zrobioneZadania);
  }

  getListaZadanObs(): Observable<Array<string>> {
    return this.listaZadanObs.asObservable();
  }

  getZrobioneZadaniaObs(): Observable<Array<string>> {
    return this.zrobioneZadaniaObs.asObservable();
  }
}
