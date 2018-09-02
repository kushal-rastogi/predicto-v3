import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-devices-card',
  templateUrl: './all-devices-card.component.html',
  styleUrls: ['./all-devices-card.component.css']
})
export class AllDevicesCardComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';



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

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {


  }

}
