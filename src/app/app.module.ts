import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BjjtrackerComponent } from './bjjtracker/bjjtracker.component';
import { RoundService } from './round.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '../../node_modules/@angular/common';
import { DecimalPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BjjtrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RoundService, DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
