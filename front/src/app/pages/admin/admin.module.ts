import {NgModule} from '@angular/core';
import {AdminProductsModule} from './products/admin-products.module';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [AdminProductsModule, AdminRoutingModule],
})
export class AdminModule{}
