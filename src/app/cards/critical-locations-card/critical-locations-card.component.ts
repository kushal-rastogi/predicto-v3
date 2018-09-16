import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-critical-locations-card',
  templateUrl: './critical-locations-card.component.html',
  styleUrls: ['./critical-locations-card.component.css']
})
export class CriticalLocationsCardComponent implements OnInit {

  dataJson = {
    'total': 27,

    'deviceInfo': [
      {
        'deviceName': 'Kerala',
        'deviceData': 4
      },
      {
        'deviceName': 'Punjab',
        'deviceData': 9
      }, {
        'deviceName': 'Gurgaon',
        'deviceData': 6
      }, {
        'deviceName': 'Delhi',
        'deviceData': 8
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
