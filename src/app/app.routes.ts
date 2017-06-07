import { Route } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';

import { LandingComponent } from './landing/landing.component';
import { AdminPostProductComponent } from './admin/admin-post-product/admin-post-product.component';
import { AdminCategoriesmanagementComponent } from './admin/admin-categoriesmanagement/admin-categoriesmanagement.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';


import { MerchantComponent } from './merchant/merchant.component';
import { MerchantPostProductComponent } from './merchant/post-product/merchant-post-product.component';
import { MerchantOrdersComponent } from './merchant/merchant-orders/merchant-orders.component';
import { MerchantMessagesComponent } from './merchant/merchant-messages/merchant-messages.component';

import { ProtectedPagesGuard } from './services/protectedPagesGuard';
import { MerchantPagesGuard } from './services/merchantPagesGuard';
import { AdminPagesGuard } from './services/adminPagesGuard';


export const ROUTES: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: "full" },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: AuthComponent },
    { path: 'products/:category', component: ProductsComponent, canActivate: [ProtectedPagesGuard] },
    { path: 'product/:id', component: ProductComponent, canActivate: [ProtectedPagesGuard] },
    { path: 'product/:category/:id', component: ProductComponent, canActivate: [ProtectedPagesGuard] },
    {
        path: 'admin', component: AdminComponent, canActivate: [ProtectedPagesGuard, AdminPagesGuard], children: [
            { path: 'categories', component: AdminCategoriesmanagementComponent },
            { path: 'postproduct', component: AdminPostProductComponent },
            { path: 'orders', component: AdminOrdersComponent },
            { path: 'messages', component: AdminMessagesComponent },
        ]
    },
    {
        path: 'merchant', component: MerchantComponent, canActivate: [ProtectedPagesGuard, MerchantPagesGuard], children: [
            { path: 'postproduct', component: MerchantPostProductComponent },
            { path: 'orders', component: MerchantOrdersComponent },
            { path: 'messages', component: MerchantMessagesComponent },
        ]
    }
];