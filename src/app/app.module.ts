import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoevalComponent } from './components/autoeval/autoeval.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginatorPipe} from "./pipes/paginator.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AptitudesService} from "./services/aptitudes-service";
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import {MatRadioModule} from "@angular/material/radio";
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoevalComponent,
    PaginatorPipe,
    NavBarComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  providers: [
    AptitudesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
