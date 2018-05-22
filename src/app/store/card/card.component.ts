import { Component, OnInit } from '@angular/core';
import { CreditCardValidator } from 'angular-cc-library';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    form: FormGroup;
    submitted: boolean = false;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
  }

  onSubmit(form) {
    this.submitted = true;
    console.log(form);
  }

}
