import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/product',)
  }

  sell(ticket : any){
   return this.http.post<any[]>('http://localhost:3000/sale',{products: ticket.products})
  }
}
