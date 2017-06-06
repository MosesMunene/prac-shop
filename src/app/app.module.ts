import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { HeaderModule } from './shared/header/header.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { NotificationService } from './services/notification.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedPagesGuard } from './services/protectedPagesGuard';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    AdminComponent,
    LandingComponent
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
    AdminModule
  ],
  providers: [AuthService, ProtectedPagesGuard, ProductService, ToasterService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
