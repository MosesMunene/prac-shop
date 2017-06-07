import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ROUTES } from './app.routes';

//Modules
import { HeaderModule } from './shared/header/header.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { MerchantModule } from './merchant/merchant.module';

//Components
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

//services
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { NotificationService } from './services/notification.service';

//Guards
import { ProtectedPagesGuard } from './services/protectedPagesGuard';
import { MerchantPagesGuard } from './services/merchantPagesGuard';
import { AdminPagesGuard } from './services/adminPagesGuard';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdminComponent,
    LandingComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    DataTablesModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    HeaderModule,
    AuthModule,
    AdminModule,
    MerchantModule
  ],
  providers: [AuthService, ProtectedPagesGuard, MerchantPagesGuard, AdminPagesGuard, ProductService, ToasterService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
