import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../../models/product';


@Component({
  selector: 'app-admin-list-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit{

  products: Product[];
  selectedProducts: Product[];
  clonedProducts: { [s: string]: Product } = {};

  constructor(private router: Router, private productsService: ProductsService){
    this.products = [];
    this.selectedProducts = [];
  }

  ngOnInit(): void{
   this.productsService.getProducts().subscribe(products => this.products = products);
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.code !== '' && product.name !== '') {
      delete this.clonedProducts[product.id];
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }

  deleteProduct(product: Product): void{
    this.productsService.deleteProduct(product.id).subscribe(() => {
      this.products = this.products.filter(p => p !== product);
    });
  }

  deleteSelectedProducts() {
    for (const product of this.selectedProducts) {
      this.productsService.deleteProduct(product.id).subscribe(() => {
        this.products = this.products.filter(p => p !== product);
      });
    }

    this.selectedProducts = null;
  }
}
