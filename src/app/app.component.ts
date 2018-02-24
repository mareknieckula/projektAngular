import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  noweZadanie: string;
  listaZadan: Array<string> = [];

  dodaj(){
    this.listaZadan.push(this.noweZadanie);
    console.log(this.listaZadan);
  }
}
