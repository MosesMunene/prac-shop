import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  private API_URL: 'http://localhost:4200/api';
  constructor(public http: Http) { }

  public createUser(email: string, firstName: string, lastName: string, password: string): Observable<Response> {
    let url = 'api/create';
    return this.http.post(url, { email: email, firstName: firstName, lastName: lastName, password: password });
  }


  public authenticate(email: string, password: string): Observable<Response> {


    let url = '/api/login/';
    return this.http.post(url, { email: email, password: password });
  }

  public isLoggedIn():boolean {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }

  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role")
  }
}
