import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class LeftColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
