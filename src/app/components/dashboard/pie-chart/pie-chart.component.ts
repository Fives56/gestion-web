import { HttpClient } from '@angular/common/http';
import {
  Component,
  Renderer2,
  OnInit,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import * as moment from 'moment';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef) {}

  colorScheme = 'cool';
 @Input() months: any = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ]
  ngOnInit(): void {}
}
