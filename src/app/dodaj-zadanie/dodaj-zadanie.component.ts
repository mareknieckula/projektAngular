import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';

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
    this.zadaniaService.dodaj(this.noweZadanie);
    this.noweZadanie = '';
  }

}
