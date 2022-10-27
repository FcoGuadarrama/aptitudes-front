import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutoevalComponent} from "./components/autoeval/autoeval.component";
import {ResultsComponent} from "./components/results/results.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component:AutoevalComponent,
  },
  {
    path: 'results',
    component:ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
