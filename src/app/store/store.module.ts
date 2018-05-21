import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProductService} from './product.service';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,

  ],
  declarations: [StoreComponent, ProductComponent, CheckoutComponent],
  providers: [ProductService]
})
export class StoreModule { }
