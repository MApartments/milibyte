import {Component, Input, OnInit} from '@angular/core';
import {Hosting} from '../hosting';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  @Input() inputHosting: Hosting;

  constructor() { }

  ngOnInit() {
  }

}
