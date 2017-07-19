import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdListModule, MdButtonModule, MdDialogModule, MdToolbarModule, MdSnackBarModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdListModule,
    FormsModule,
    MdButtonModule,
    MdDialogModule,
    MdToolbarModule,
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
