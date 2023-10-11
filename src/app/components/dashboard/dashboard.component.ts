import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  loading: boolean = false;
  pagination: boolean = false;
  order: string = 'name';
  direction: string = 'asc';
  limit: number = 10;
  offset: number = 0;
  count: number = 0;
  search: string ='';
  
  constructor(private http: HttpClient){}

  onClick(){
    const object = this.http.post<any>('http://localhost:3000/sale', {
      productId: 1,
      quantity: 1,
      date: new Date()
    }).subscribe(res => {
      console.log(res)
    })
    
  }

}
