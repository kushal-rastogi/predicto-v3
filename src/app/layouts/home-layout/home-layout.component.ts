import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-left-column></app-left-column>
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
