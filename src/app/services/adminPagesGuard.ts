import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable()
export class AdminPagesGuard implements CanActivate {

    constructor(private notificationService: NotificationService) {

    }

    canActivate(): boolean {
        const role = localStorage.getItem('role');
        if (!!role && role.toLocaleLowerCase() !== "admin") {
            this.notificationService.notifyWarning("Restricted to Administartors");
            return false;
        }
        else {
            return true;
        }
    }
}