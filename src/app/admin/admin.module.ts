import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
import { DataTablesModule } from 'angular-datatables';
import { PostProductComponent } from './post-product/post-product.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { CategoriesmanagementComponent } from './categoriesmanagement/categoriesmanagement.component';


@NgModule({
  imports: [
<<<<<<< HEAD
    CommonModule, DataTablesModule, FormsModule
=======
    CommonModule, DataTablesModule, FormsModule, ReactiveFormsModule
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
  ],
  declarations: [PostProductComponent, OrdersComponent, MessagesComponent, CategoriesmanagementComponent]
})
export class AdminModule { }
