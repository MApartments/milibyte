import {Component, OnInit} from '@angular/core';
import {ITdDataTableColumn, TdFadeInOutAnimation} from '@covalent/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    TdFadeInOutAnimation(), // using implicit anchor name 'tdFadeInOut' in template
  ],
})
export class HomeComponent implements OnInit {
  triggerState = false;
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'ime',  label: 'ShoutCast' },
    { name: 'broj', label: 'Broj slušatelja' },
    { name: 'promet', label: 'Mjesečni promet' },
    { name: 'bitrate', label: 'Bitrate' },
    { name: 'dj', label: 'AutoDJ' },
    { name: 'prikaz', label: 'Prikaz informacija o trenutnom izvođaču' },
    { name: 'centar', label: 'Hrvatski data centar' },
    { name: 'cijena', label: 'Cijena'},
  ];
  basicData: any[] = [
      {
        'cijena': 500.00,
        'ime': 'ShoutCast Beginner',
        'broj': '32',
        'promet': 'Neograničen',
        'bitrate': '128 kbps',
        'dj': 'Da',
        'prikaz': 'Da',
        'centar': 'Da',
      },
    {
      'cijena': 900.00,
      'ime': 'ShoutCast Pro',
      'broj': '64',
      'promet': 'Neograničen',
      'bitrate': '128 kbps',
      'dj': 'Da',
      'prikaz': 'Da',
      'centar': 'Da',
    },
    {
      'cijena': 1400.00,
      'ime': 'ShoutCast Premium',
      'broj': '128',
      'promet': 'Neograničen',
      'bitrate': '128 kbps',
      'dj': 'Da',
      'prikaz': 'Da',
      'centar': 'Da',
    },
         ];
  constructor() {}

  ngOnInit() {
  }

}


