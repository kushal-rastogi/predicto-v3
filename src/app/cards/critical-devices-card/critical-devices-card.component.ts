import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-critical-devices-card',
  templateUrl: './critical-devices-card.component.html',
  styleUrls: ['./critical-devices-card.component.css']
})
export class CriticalDevicesCardComponent implements OnInit {

  dataJson = {
    'total': 50,

    'deviceInfo': [
      {
        'deviceName': '220 Transformer',
        'deviceData': 43
      },
      {
        'deviceName': '440 V trans',
        'deviceData': 95
      }, {
        'deviceName': 'Transformer',
        'deviceData': 60
      }, {
        'deviceName': '440 V trans',
        'deviceData': 68
      }
    ]
  };

  data: any = {};

  constructor(private http: HttpClient) {
    console.log('contructor');
    this.getData();
    this.getData1();
  }

  getData() {
    /*const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');*/
    // return this.http.get('http://console.octet.ai/api/stats/devices/critical/type').map((res => res));
    return this.http.get('http://console.octet.ai/api/dashboard/component/critical1').map((res => res));
  }

  getData1() {
    this.getData().subscribe(data => {
        console.log('umang data11 :', data);
        this.data = data;
      },
    );
  }

  ngOnInit() {
  }

}
