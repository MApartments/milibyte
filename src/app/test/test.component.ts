import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  products: string[] = [
    'jabuka',
    'krushka',
    'jablani',
   ]

  constructor() {
  }

  ngOnInit() {
  }

  dodaj(proizvod: string) {
    console.log(proizvod);
    if (this.checkIsEmptyString(proizvod) === false) {
      this.products.push(proizvod);
    }
    else {
      alert ('greska')
    }
  }
  
  remove(proizvod: string) {
    this.products = this.products.filter(product => product !== proizvod);
    console.log(proizvod);
  }

  checkIsEmptyString(value: string): boolean {
    if(typeof value !== 'string' || value === '') {
      return true;
    } else {
      return false;
    }
  }
}
