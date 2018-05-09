import {Component, OnInit} from '@angular/core';


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
  folders = [
    {name: '128 slušatelja'},
    {name: 'Neograničen mjesečni promet'},
    {name: 'Bitrate 128Kbps'},
    {name: 'AutoDJ'},
    {name: 'Prikaz informacija o trenutnom izvođaču'},
    {name: 'Hrvatski data centar'},
    {name: 'Administracijski web panel'},
  ];
  notes = [
    {name: '32 slušatelja'},
    {name: 'Neograničen mjesečni promet'},
    {name: 'Bitrate 128Kbps'},
    {name: 'AutoDJ'},
    {name: 'Prikaz informacija o trenutnom izvođaču'},
    {name: 'Hrvatski data centar'},
    {name: 'Administracijski web panel'},
  ];
  host1s = [
    {name: 'Free domena (.TK /.ML /.GA /.CF /.GQ)'},
    {name: 'Neograničen mjesečni promet'},
    {name: 'Joomla/Wordpress/..'},
    {name: 'CoD,WoW,Battlefield,..'},
    {name: 'Plugin po želji'},
    {name: 'Hrvatski data centar'},
    {name: 'Administracijski web panel'},
  ];
  host2s = [
    {name: 'Domena (.COM /.NET /.ORG /.INFO)'},
    {name: 'Neograničen mjesečni promet'},
    {name: 'Joomla/Wordpress/HTML/..'},
    {name: 'CoD,WoW,Battlefield,..'},
    {name: 'Logo, Banner, plugin po želji'},
    {name: 'Hrvatski data centar'},
    {name: 'Administracijski web panel'},
  ];
  constructor() {}

  ngOnInit() {
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
