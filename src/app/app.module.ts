import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //supaya masuk ngModel di angular

import { AppComponent } from './app.component';
import { CobaComponent } from './coba/coba.component';
import { CobacobaComponent } from './cobacoba/cobacoba.component';

@NgModule({
  declarations: [AppComponent, CobaComponent, CobacobaComponent],
  imports: [BrowserModule, FormsModule], //memasukkan FormsModule agar dikenali angular
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//declarations= memasukkan component angular ke app module
//imports = memasukkan module-module ke app module

//bootstrap = initial component when app level loaded
