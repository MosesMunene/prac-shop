import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MerchantComponent } from './merchant.component';
import { MerchantPostProductComponent } from './post-product/merchant-post-product.component';
import { MerchantOrdersComponent } from './merchant-orders/merchant-orders.component';
import { MerchantMessagesComponent } from './merchant-messages/merchant-messages.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, DataTablesModule
  ],
  declarations: [MerchantComponent, MerchantPostProductComponent, MerchantOrdersComponent, MerchantMessagesComponent]
})
export class MerchantModule { }
