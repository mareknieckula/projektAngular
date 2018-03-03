import { Component, OnInit, Input } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';

@Component({
  selector: 'app-zrobione-zadania',
  templateUrl: './zrobione-zadania.component.html',
  styleUrls: ['./zrobione-zadania.component.css']
})
export class ZrobioneZadaniaComponent implements OnInit {

  zrobioneZadania: Array<string> = [];
  constructor(private zadaniaService: ZadaniaService) {
    this.zadaniaService.getZrobioneZadaniaObs().subscribe((zadania: Array<string>) => {
      this.zrobioneZadania = zadania;
    });
  }

  ngOnInit() {
  }

}
