import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZadaniaService } from '../services/zadania.service';
import { Zadanie } from '../models/zadanie';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-zadanie',
  templateUrl: './dodaj-zadanie.component.html',
  styleUrls: ['./dodaj-zadanie.component.css']
})
export class DodajZadanieComponent implements OnInit {

  addForm: FormGroup;

  constructor(private zadaniaService: ZadaniaService) { }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      zadanieName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  dodaj() {
    const listaZadan = this.createListaZadan();
    this.zadaniaService.dodaj(listaZadan);
    this.addForm = this.initForm();
    // this.noweZadanie = '';
  }

  createListaZadan(): Array<Zadanie> {
    const listaZadan = new Array<Zadanie>();
    const zadaniaTab = <[string]>this.addForm.get('zadanieName').value;
    zadaniaTab.forEach(zadanieName => {
      const zadanie = { name: zadanieName, created: new Date().toLocaleString(), isDone: false };
      listaZadan.push(zadanie);
    });
    return listaZadan;
  }

  dodajPole() {
    const tab = <FormArray>this.addForm.get('zadanieName');
    tab.push(new FormControl(null, Validators.required));
  }

}
