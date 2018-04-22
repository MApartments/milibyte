import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
