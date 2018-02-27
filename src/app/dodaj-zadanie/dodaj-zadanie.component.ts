import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dodaj-zadanie',
  templateUrl: './dodaj-zadanie.component.html',
  styleUrls: ['./dodaj-zadanie.component.css']
})
export class DodajZadanieComponent implements OnInit {

  noweZadanie: string;
  @Output()
  emitZadanie = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  dodaj() {
    this.emitZadanie.emit(this.noweZadanie);
    this.noweZadanie = '';
  }

}
