import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  layout = 'list';

  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  constructor(private productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void{
    this.productService.getProducts().subscribe(products => this.products = products);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
