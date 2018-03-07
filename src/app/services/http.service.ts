import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Zadanie } from '../models/zadanie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/zadania';
  readonly param = new HttpParams().set('apiKey', 'fvh6gHJDvANZr90rYkTNKQes9QEZMORY');

  constructor(private http: HttpClient) {
    this.getZadania();
  }

  getZadania(): Observable<Array<Zadanie>> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Array<Zadanie>>(this.URL_DB, { params: this.param });
  }


saveZadania(list: Array<Zadanie>) {
  this.http.put(this.URL_DB, list, { params: this.param }).subscribe(data => {
    console.log(data);
  });
}

}
