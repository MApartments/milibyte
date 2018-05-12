import {Component, OnInit} from '@angular/core';
import {HostingService} from './hosting.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  folders = [];
  notes = [];
  host1s = [];
  host2s = [];
  constructor(private hostingService: HostingService) {}

  ngOnInit() {
    this.hostingService.getShoutcasts().subscribe(
      (serverData) => {
      this.folders = serverData;
    });
    this.hostingService.getShoutcastsPremium().subscribe(
      (serverData) => {
        this.notes = serverData;
      });
    this.hostingService.getHostingRookie().subscribe(
      (serverData) => {
        this.host1s = serverData;
      });
    this.hostingService.getHostingWarlord().subscribe(
      (serverData) => {
        this.host2s = serverData;
      });
  }

}
export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 'Diskovni prostor', name: '2.000 MB', weight: '25000', symbol: '150000'},
  {position: 'Broj web stranica', name: 'Neograničeno', weight: 'Neograničeno', symbol: 'Neograničeno'},
  {position: 'Odabir PHP verzije (ver. 5.2 do 7.1)', name: 'DA', weight: 'DA', symbol: 'DA'},
  {position: 'cPanel administracija', name: 'DA', weight: 'DA', symbol: 'DA'},
  {position: 'MySQL baze', name: '2', weight: '20', symbol: 'Neograničeno'},
  {position: '99,5% uptime garancija', name: 'DA', weight: 'DA', symbol: 'DA'},
  {position: 'Cijena godišnje', name: '100Kn', weight: '350Kn', symbol: '1000Kn'},
];
