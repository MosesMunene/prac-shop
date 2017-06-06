import { Route } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { ProtectedPagesGuard } from './services/protectedPagesGuard';

import { LandingComponent } from './landing/landing.component';
import { PostProductComponent } from './admin/post-product/post-product.component';
import { CategoriesmanagementComponent } from './admin/categoriesmanagement/categoriesmanagement.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { MessagesComponent } from './admin/messages/messages.component';

export const ROUTES: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: "full" },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: AuthComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [ProtectedPagesGuard] },
    { path: 'products/:category', component: DashboardComponent, canActivate: [ProtectedPagesGuard] },
    { path: 'product/:id', component: ProductComponent, canActivate: [ProtectedPagesGuard] },
    { path: 'product/:category/:id', component: ProductComponent, canActivate: [ProtectedPagesGuard] },
    {
        path: 'admin', component: AdminComponent, canActivate: [ProtectedPagesGuard], children: [
            { path: 'categories', component: CategoriesmanagementComponent },
            { path: 'postproduct', component: PostProductComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'messages', component: MessagesComponent },
        ]
    }
];