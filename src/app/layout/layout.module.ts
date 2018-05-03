import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatDividerModule, MatMenuModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  ],
  exports: [
    MainLayoutComponent
  ],
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent]
})
export class LayoutModule { }
