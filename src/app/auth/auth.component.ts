import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private user: User;
  constructor(private authService: AuthService, private notificationService: NotificationService) { }

  ngOnInit() {
  }


  public createUser(email: HTMLInputElement,
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    password: HTMLInputElement,
    passwordRepeat: HTMLInputElement) {

    let passwordValue = password.value;
    let passwordRepeatValue = passwordRepeat.value;
    if (passwordValue !== passwordRepeatValue) {
      console.log("password no match");
      return null;
    }

    this.authService.createUser(email.value, firstName.value, lastName.value, password.value).subscribe((response) => {
      console.log(response.json());
    })
  }

  public authenticate(email: HTMLInputElement, password: HTMLInputElement) {
    let emailValue: string = email.value;
    let passwordValue: string = password.value;

    this.authService.authenticate(emailValue, passwordValue).subscribe((response) => {
      let responseData = response.json();
      if (responseData.success) {
        console.log("login success")
        localStorage.setItem("token", responseData.token);
        this.notificationService.notifySuccess("Login succesful");
      }
      else {
        console.log("login not sucessful")
        this.notificationService.notifyWarning("Login not successful");
      }
    }, (error) => {
      this.notificationService.notifyError("Could not fullfil this request");
    })
  }

  public logout() {
    this.authService.logout();
  }

}
