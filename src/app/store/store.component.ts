import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() inputProduct: Product;

  products: Product[] = [];
  step = 0;

  constructor(private productsService: ProductService) {
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (serverData) => {
        this.products = serverData;
      });

  }

  setStep(step: number) {
    this.step = step;
  }
}
