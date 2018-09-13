import {Component, OnInit} from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-location-map-card',
  templateUrl: './location-map-card.component.html',
  styleUrls: ['./location-map-card.component.css']
})
export class LocationMapCardComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ]);

      var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }
  }

}
