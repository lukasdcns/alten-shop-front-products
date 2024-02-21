import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';

import { AdminProductsComponent } from './list-products/admin-products.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {TagModule} from 'primeng/tag';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {AdminAddProductFormComponent} from './add-product/admin-add-product-form.component';
import {AdminAddProductComponent} from './add-product/admin-add-product.component';
import {RouterLink} from '@angular/router';

@NgModule({
  declarations: [
    AdminProductsComponent, AdminAddProductComponent, AdminAddProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    RouterLink
  ],
  providers: [ProductsService],
  bootstrap: []
})
export class AdminProductsModule { }
