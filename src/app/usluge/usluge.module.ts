import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UslugeRoutingModule } from './usluge-routing.module';
import { UslugeComponent } from './usluge.component';
import { ProwebComponent } from './proweb/proweb.component';

@NgModule({
  imports: [
    CommonModule,
    UslugeRoutingModule
  ],
  declarations: [UslugeComponent, ProwebComponent]
})
export class UslugeModule { }
