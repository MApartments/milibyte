import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StickyNavModule} from 'ng2-sticky-nav/dist';
import {CovalentLayoutModule} from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    StickyNavModule,
    CovalentLayoutModule,
  ],
  exports: [
    MainLayoutComponent
  ],
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent]
})
export class LayoutModule { }
