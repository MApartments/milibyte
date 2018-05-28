import {Component, OnInit} from '@angular/core';
import {HostingService} from './hosting.service';
import {Shoutcast} from './shoutcast';
import {Hosting} from './hosting';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ],
})
export class HomeComponent implements OnInit {
  shoutcasts: Shoutcast[] = [];
  hostings: Hosting[] = [];
  constructor(private hostingService: HostingService) {}

  ngOnInit() {
    this.hostingService.getShoutcasts().subscribe(
      (serverData) => {
        this.shoutcasts = serverData;
      });
    this.hostingService.getHostings().subscribe(
      (serverData) => {
        this.hostings = serverData;
      });

  }

}
