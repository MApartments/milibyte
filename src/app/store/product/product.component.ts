import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() inputProduct: Product;
  @Output() order = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOrder() {
    this.order.emit();
  }

}
