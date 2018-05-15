import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Morate unijeti eamil adresu' :
      this.email.hasError('email') ? 'Netočna email adresa' :
        '';
  }

  constructor() { }

  ngOnInit() {
  }

}
