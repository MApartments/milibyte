import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import {HomeModule} from './home/home.module';
import {StoreModule} from './store/store.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {ContactModule} from './contact/contact.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UslugeModule} from './usluge/usluge.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HomeModule,
    StoreModule,
    ContactModule,
    UslugeModule,
    LayoutModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
