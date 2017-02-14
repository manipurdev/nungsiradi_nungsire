import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { AngularFireModule } from 'angularfire2'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBhg6wpEhmXL_tCaRHfLeEFEwHmhLDXLF8",
  authDomain: "people-82905.firebaseapp.com",
  databaseURL: "https://people-82905.firebaseio.com",
  storageBucket: "people-82905.appspot.com",
  messagingSenderId: "96247822155"
};

@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    MaterialModule.forRoot()
  ],
  entryComponents: [AddMessageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
