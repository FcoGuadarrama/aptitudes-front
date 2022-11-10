import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoevalComponent } from './components/autoeval/autoeval.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginatorPipe} from "./pipes/paginator.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AptitudesService} from "./services/aptitudes-service";
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import {MatRadioModule} from "@angular/material/radio";
import { ResultsComponent } from './components/results/results.component';
import { AspiranteRegisterComponent } from './components/aspirante-register/aspirante-register.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    AutoevalComponent,
    PaginatorPipe,
    NavBarComponent,
    ResultsComponent,
    AspiranteRegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatRadioModule,
        HttpClientModule,
        FormsModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        MatButtonModule,
        MatToolbarModule,
    ],
  providers: [
    AptitudesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
