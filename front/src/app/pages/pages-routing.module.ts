import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';


// les routes du module Pokémon
const pagesRoutes: Routes = [
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
