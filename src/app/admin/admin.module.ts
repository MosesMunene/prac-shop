import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PostProductComponent } from './post-product/post-product.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { CategoriesmanagementComponent } from './categoriesmanagement/categoriesmanagement.component';


@NgModule({
  imports: [
    CommonModule, DataTablesModule, FormsModule
  ],
  declarations: [PostProductComponent, OrdersComponent, MessagesComponent, CategoriesmanagementComponent]
})
export class AdminModule { }
