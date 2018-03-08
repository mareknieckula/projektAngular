import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { DoZrobieniaComponent } from './do-zrobienia/do-zrobienia.component';
import { ZrobioneZadaniaComponent } from './zrobione-zadania/zrobione-zadania.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/doZrobienia',
    pathMatch: 'full'
  },
  {
    path: 'doZrobienia',
    component: DoZrobieniaComponent
  },
  {
    path: 'zrobioneZadania',
    component: ZrobioneZadaniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
