import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Output() paymentMethodSelected = new EventEmitter<string>();
  email = new FormControl('', [Validators.required, Validators.email]);



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor() { }

  paymentMethodChanged(selectedPaymentMethod) {
    this.paymentMethodSelected.emit(selectedPaymentMethod.value);
  }

  ngOnInit() {
  }

}
