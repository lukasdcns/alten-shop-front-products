import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductsService} from '../../../../services/products.service';
import {Product} from '../../../../../models/product';

@Component({
  selector: 'app-admin-add-product-form',
  templateUrl: './admin-add-product-form.component.html',
  styleUrls: ['./admin-add-product-form.component.scss']
})
export class AdminAddProductFormComponent implements OnInit{
  types: any = [];
  @Input() product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService){
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

  onSubmit(): void{
    this.productsService.addProduct(this.product).subscribe(() => this.productsService.goBack(['admin/products']));
  }
}
