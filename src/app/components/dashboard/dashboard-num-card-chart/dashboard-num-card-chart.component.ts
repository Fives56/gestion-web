import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-num-card-chart',
  templateUrl: './dashboard-num-card-chart.component.html',
  styleUrls: ['./dashboard-num-card-chart.component.css']
})

export class DashboardNumCardChartComponent  {

  @Input() view: [number, number] = [700, 500];
  @Input() sales = [
    {
      "name": "producto !",
      "value": 10
    }
  ];

  onSelect(event: Event) {
    console.log(event);
  }
}
