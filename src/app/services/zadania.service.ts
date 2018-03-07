import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Zadanie } from '../models/zadanie';
import { HttpService } from './http.service';

@Injectable()
export class ZadaniaService {

  private listaZadanObs = new BehaviorSubject<Array<Zadanie>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getZadania().subscribe(list => {
      this.listaZadanObs.next(list);
    });
  }

  dodaj(zadanie: Zadanie) {
    const lista = this.listaZadanObs.getValue();
    lista.push(zadanie);
    this.listaZadanObs.next(lista);
  }

  usun(zadanie: Zadanie) {
    const lista = this.listaZadanObs.getValue().filter(e => e !== zadanie);
    this.listaZadanObs.next(lista);
  }

  zrobione(zadanie: Zadanie) {
    zadanie.end = new Date().toLocaleString();
    zadanie.isDone = true;
    const lista = this.listaZadanObs.getValue();
    this.listaZadanObs.next(lista);
  }

  getListaZadanObs(): Observable<Array<Zadanie>> {
    return this.listaZadanObs.asObservable();
  }

  saveZadaniaInDb() {
    this.httpService.saveZadania(this.listaZadanObs.getValue());
  }

}
