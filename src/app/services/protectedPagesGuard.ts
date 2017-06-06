import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable()
export class ProtectedPagesGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private notificationService:NotificationService) {

    }

    canActivate(): boolean {
        let isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.notificationService.notifyWarning("Access Denied");
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }
}