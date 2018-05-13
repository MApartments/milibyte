import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {LayoutModule} from '../layout/layout.module';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule, MatDividerModule,
  MatGridListModule,
  MatIconModule, MatListModule,
  MatTableModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CovalentDataTableModule, CovalentVirtualScrollModule} from '@covalent/core';
import {HostingService} from './hosting.service';
import { ShoutcastComponent } from './shoutcast/shoutcast.component';

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
    MatChipsModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
  ],
  declarations: [HomeComponent, ShoutcastComponent],
  providers: [HostingService]
})
export class HomeModule { }
