import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AdminPostProductComponent } from './admin-post-product/admin-post-product.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminCategoriesmanagementComponent } from './admin-categoriesmanagement/admin-categoriesmanagement.component';


@NgModule({
  imports: [
    CommonModule, DataTablesModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [AdminPostProductComponent, AdminOrdersComponent, AdminMessagesComponent, AdminCategoriesmanagementComponent]
})
export class AdminModule { }
