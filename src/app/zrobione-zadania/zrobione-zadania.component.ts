import { Component, OnInit, Input } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';
import { Zadanie } from '../models/zadanie';

@Component({
  selector: 'app-zrobione-zadania',
  templateUrl: './zrobione-zadania.component.html',
  styleUrls: ['./zrobione-zadania.component.css']
})
export class ZrobioneZadaniaComponent implements OnInit {

  zrobioneZadania: Array<Zadanie> = [];
  constructor(private zadaniaService: ZadaniaService) {
    this.zadaniaService.getListaZadanObs().subscribe((zadania: Array<Zadanie>) => {
      this.zrobioneZadania = zadania.filter(z => z.isDone === true);
    });
  }

  ngOnInit() {
  }

}
