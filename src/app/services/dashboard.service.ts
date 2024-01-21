import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  constructor(private http: HttpClient) { }

  getMonths(){
    return this.http.get<any[]>('http://localhost:3000/sale/months')
  }

  getSalesToday(){
    return this.http.get<any[]>('http://localhost:3000/product/sales',)
  }
}
