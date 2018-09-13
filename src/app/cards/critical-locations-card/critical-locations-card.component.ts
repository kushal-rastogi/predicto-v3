import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-critical-locations-card',
  templateUrl: './critical-locations-card.component.html',
  styleUrls: ['./critical-locations-card.component.css']
})
export class CriticalLocationsCardComponent implements OnInit {

  dataJson = {
    'total': 50,

    'deviceInfo': [
      {
        'deviceName': 'Calvin',
        'deviceData': 43
      },
      {
        'deviceName': 'Marvin',
        'deviceData': 95
      }, {
        'deviceName': 'Jackson',
        'deviceData': 60
      }, {
        'deviceName': 'Cullen',
        'deviceData': 68
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
