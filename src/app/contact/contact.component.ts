import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  productControl = new FormControl('', [Validators.required]);

  email: string;
  product: {name: string, price: string};
  products = [
    {name: 'Professional website', price: 'Cijena ovisi o zeljama'},
    {name: 'Gaming website', price: 'Cijena: Bez domene 100Kn, s com domenom 200kn'},
    {name: 'Shoutcast radio', price: 'Cijena: vec od 500kn'},
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }

}

