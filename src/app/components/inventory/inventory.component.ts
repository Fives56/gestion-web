import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { SalesService } from 'src/app/services/sales.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {

  products: Product[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getProducts().subscribe((data: any) => {
      this.products = data.rows.map((res: any) => {
        return res;
      });
    });
  }
}
