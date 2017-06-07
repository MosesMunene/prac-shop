import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable()
export class MerchantPagesGuard implements CanActivate {

    constructor(private authService: AuthService, private notificationService: NotificationService) {

    }

    canActivate(): boolean {
        const role = localStorage.getItem('role');
        if (!!role) {
             console.log("merchantGuard canActivate called");
            this.notificationService.notifyWarning("Restricted to Merchants only");
            return false;
        }
        else {
            return true;
        }
    }
}