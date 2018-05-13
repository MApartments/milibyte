import {Component, Input, OnInit} from '@angular/core';
import {Shoutcast} from '../shoutcast';

@Component({
  selector: 'app-shoutcast',
  templateUrl: './shoutcast.component.html',
  styleUrls: ['./shoutcast.component.css']
})
export class ShoutcastComponent implements OnInit {

  @Input() inputShoutcast: Shoutcast;

  constructor() { }

  ngOnInit() {
  }

}
