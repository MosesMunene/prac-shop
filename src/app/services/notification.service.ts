import { Injectable, OnInit } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Injectable()
export class NotificationService implements OnInit {

    constructor(private toasterService: ToasterService) {

    }



    ngOnInit() {

    }

    public notifySuccess(message?: string) {
        var toast: Toast = {
            type: 'success',
            title: 'Sucess!',
            body: message,
            showCloseButton: true,
        };
        this.toasterService.pop(toast);

    }

    public notifyWarning(message?:string) {
        var toast: Toast = {
            type: 'warning',
            title: 'Warning!',
            body: message,
            showCloseButton: true,
        };
        this.toasterService.pop(toast);
    }

    public notifyError(message?: string) {
        var toast: Toast = {
            type: 'error',
            title: 'Sucess!',
            body: message,
            showCloseButton: true,
        };
        this.toasterService.pop(toast);
    }

    public notifyInfo() {
        console.log('notifying');

    }
}
