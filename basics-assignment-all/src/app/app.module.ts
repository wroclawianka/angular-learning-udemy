import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicAssigment1Component } from './components/basic-assigment-1/basic-assigment-1.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { BasicAssigment2Component } from './components/basic-assigment-2/basic-assigment-2.component';
import { BasicAssigment3Component } from './components/basic-assigment-3/basic-assigment-3.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAssigment1Component,
    SuccessAlertComponent,
    WarningAlertComponent,
    BasicAssigment2Component,
    BasicAssigment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }