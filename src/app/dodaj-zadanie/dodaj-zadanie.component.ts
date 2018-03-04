import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';
import { Zadanie } from '../models/zadanie';

@Component({
  selector: 'app-dodaj-zadanie',
  templateUrl: './dodaj-zadanie.component.html',
  styleUrls: ['./dodaj-zadanie.component.css']
})
export class DodajZadanieComponent implements OnInit {

  noweZadanie: string;

  constructor(private zadaniaService: ZadaniaService) { }

  ngOnInit() {
  }

  dodaj() {
    const zadanie: Zadanie = ({ name: this.noweZadanie, created: new Date() });
    this.zadaniaService.dodaj(zadanie);
    this.noweZadanie = '';
  }

}
