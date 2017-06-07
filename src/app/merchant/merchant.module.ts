import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MerchantComponent } from './merchant.component';
import { PostProductComponent } from './post-product/post-product.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MerchantComponent, PostProductComponent, OrdersComponent, MessagesComponent, ProductsComponent]
})
export class MerchantModule { }
