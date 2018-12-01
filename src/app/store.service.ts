import { Product } from './store/product';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  cart: Product[]

  constructor() { }

  addToCart(productToAdd: Product) {
    this.cart.push(productToAdd)
  }
}
