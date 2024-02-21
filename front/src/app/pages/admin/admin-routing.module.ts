import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminProductsComponent} from './products/list-products/admin-products.component';
import {AdminAddProductComponent} from './products/add-product/admin-add-product.component';
import {ProductsComponent} from '../products/products.component';


// les routes du module Pokémon
const adminRoutes: Routes = [
  { path: 'admin', redirectTo: 'admin/products', pathMatch: 'full' },
  {
    path: 'admin',
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'products/add', component: AdminAddProductComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
