import {NgModule} from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import {ProductsComponent} from './products/products.component';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {TagModule} from 'primeng/tag';
import {NgClass, NgIf} from '@angular/common';
import {AdminModule} from './admin/admin.module';
import {ProductsService} from '../services/products.service';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [ProductsComponent],
    imports: [
        PagesRoutingModule,
        DataViewModule,
        RatingModule,
        FormsModule,
        TagModule,
        NgClass,
        AdminModule,
        ButtonModule,
        NgIf,
        TableModule,
        ToastModule,
        ToolbarModule,
        OrderListModule,
        DropdownModule
    ],
  providers: [ProductsService],
})
export class PagesModule{}
