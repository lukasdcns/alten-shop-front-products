import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../../../models/product';
import {ProductsService} from '../../../../services/products.service';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html'
})

export class AdminAddProductComponent implements OnInit{
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private router: Router, private productSerive: ProductsService) {
    this.product.id = Math.random();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {}
}
