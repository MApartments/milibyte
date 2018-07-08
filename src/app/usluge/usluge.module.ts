import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UslugeRoutingModule } from './usluge-routing.module';
import { UslugeComponent } from './usluge.component';
import { ProwebComponent } from './proweb/proweb.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import {StickyNavModule} from 'ng2-sticky-nav/dist';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatCardModule, MatDividerModule, MatListModule} from '@angular/material';
import { GamingComponent } from './gaming/gaming.component';

@NgModule({
  imports: [
    CommonModule,
    UslugeRoutingModule,
    FlexLayoutModule,
    StickyNavModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
  ],
  declarations: [UslugeComponent, ProwebComponent, GamingComponent]
})
export class UslugeModule { }
