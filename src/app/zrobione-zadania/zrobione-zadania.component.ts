import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zrobione-zadania',
  templateUrl: './zrobione-zadania.component.html',
  styleUrls: ['./zrobione-zadania.component.css']
})
export class ZrobioneZadaniaComponent implements OnInit {

  @Input()
  zrobioneZadania: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
