import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { Product } from 'src/app/models/product.models';
import { MatTable } from '@angular/material/table';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  products: Product[] = [];
  forSell: any;
  ticket: any = [];
  displayedColumns: string[] = ['producto', 'precio', 'cantidad'];
  dataSource?: any;
  linear = true;

  @ViewChild(MatTable)
  table!: MatTable<any>;
  @ViewChild('stepper')
  stepper!: MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    private salesService: SalesService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  productForm = this._formBuilder.group({
    product: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  ngOnInit(): void {
    this.salesService.getProducts().subscribe((data: any) => {
      this.products = data.rows.map((res: any) => {
        return res;
      });
    });
  }

  nextValidation() {
    if (
      typeof this.productForm.value.quantity === 'number' &&
      this.productForm.value.quantity > 0
    ) {
      this.stepper.next();
    } else if (this.ticket.products.length > 0) {
      this.stepper.next();
    } else {
      alert('Debes ingresar almenos un producto con una cantidad valida');
    }
  }

  onSelectionChange(event: any): void {
    if (event.selectedIndex == 1) {
      this.updateTicket(
        this.productForm.value.product,
        this.productForm.value.quantity
      );
      this.ticket.total = !!this.ticket.total ? this.ticket.total : 0;
      for (const i of this.ticket.products) {
        this.ticket.total += i.quantity * i.product.price;
      }
      this.dataSource = this.ticket.products;
      this.table.renderRows();
    } else {
      this.productForm.reset();
    }
  }

  sell() {
    return this.salesService.sell(this.ticket).subscribe(() => {
      console.log(this.ticket)
      alert('Se ha realizado correctamente la venta');
      this.stepper.previous();
      this.ticket = {};
      this.linear = true;
    });
  }

  /**
   * Adds a new product to the list of products being sold, along with its quantity.
   */
  addProduct() {
    this.updateTicket(
      this.productForm.value.product,
      this.productForm.value.quantity
    );
    this.productForm.reset();
  }

  /**
   * Adds or updates an item in the ticket.
   * @param {string} product - The name of the product being sold.
   * @param {number} quantity - The quantity of the product being sold.
   */
  updateTicket(product: any, quantity: any, edit: boolean = false) {
    this.ticket.products = !!this.ticket.products ? this.ticket.products : [];

    let existingProduct = this.ticket.products.find(
      (p: any) => p.product === product
    );

    if (existingProduct && edit) {
      existingProduct.quantity = quantity.target.value;
      return;
    }

    if (existingProduct && !edit) {
      existingProduct.quantity += quantity;
    } else if (quantity > 0) {
      this.ticket.products.push({ product: product, quantity: quantity });
      this.linear = this.ticket.products.length > 0 ? false : true;
    } else {
      if (this.linear) {
        alert(
          'No se puede vender un Producto con cantidad negativa o igual a cero'
        );
      }
    }
  }

  /**
   * Removes an item from the ticket.
   * @param {object} existingProduct - The product object to be removed.
   */
  delete(existingProduct: any) {
    if (!!this.ticket.total) {
      this.ticket.total -=
        existingProduct.quantity * existingProduct.product.price;
    }

    this.ticket.products = this.ticket.products.filter(
      (element: any) => element.product !== existingProduct.product
    );
    console.log(this.ticket);
  }
}
