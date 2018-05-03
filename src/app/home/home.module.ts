import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {LayoutModule} from '../layout/layout.module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CovalentDataTableModule, CovalentVirtualScrollModule} from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    CovalentDataTableModule,
    CovalentVirtualScrollModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
