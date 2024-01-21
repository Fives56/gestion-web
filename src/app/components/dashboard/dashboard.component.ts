import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  loading: boolean = false;
  pagination: boolean = false;
  order: string = 'name';
  direction: string = 'asc';
  limit: number = 10;
  offset: number = 0;
  count: number = 0;
  search: string = '';
  months: any[] = [];
  sales: any[] = [];
  view: [number, number] = [700, 250];

  ngOnInit(): void {
    moment.locale('es');
    this.dashboardService.getMonths().subscribe((data: any[]) => {
      this.months = data.map((e) => ({ name: e.month, value: e.sales }));
    });

    this.dashboardService.getSalesToday().subscribe((data: any) => {
      this.sales = data.filter((sale: any) => sale.value !== 0);

      this.view = this.sales.length < 4 ? this.view : [700, 500];
    });
  }

}
