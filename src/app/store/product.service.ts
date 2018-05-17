import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable()
export class ProductService {
  backendUrl = 'http://5af6d472c222a90014dbda33.mockapi.io/api/v1/';
  constructor(private http: HttpClient) { }

  getProducts() {
    const productUrl = this.backendUrl + 'produktList';
    return this.http.get<Product[]>(productUrl);
  }
}



