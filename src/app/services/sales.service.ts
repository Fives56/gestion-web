import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any[]>('http://localhost:3000/product',)
  }

  sell(ticket : any){
   return this.http.post<any[]>('http://localhost:3000/sale',{products: ticket.products})
  }
}
