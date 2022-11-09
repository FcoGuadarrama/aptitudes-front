import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutoevalComponent} from "./components/autoeval/autoeval.component";
import {ResultsComponent} from "./components/results/results.component";
import {AspiranteRegisterComponent} from "./components/aspirante-register/aspirante-register.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {IsLogInService} from "./services/Middleware/is-log-in.service";
import {IsNotLogInService} from "./services/Middleware/is-not-log-in.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [IsNotLogInService],
  },
  {
    path: 'inicio',
    component:AspiranteRegisterComponent,
    canActivate: [IsNotLogInService],
  },
  {
    path:'autoeval',
    component: AutoevalComponent,
    canActivate: [IsNotLogInService],
  },
  {
    path: 'results',
    component:ResultsComponent,
    canActivate: [IsNotLogInService],
  },
  {
    path: 'admin/dashboard',
    component:DashboardComponent,
    canActivate: [IsLogInService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
