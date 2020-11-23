import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  redirectUrl: any;

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('APP_TOKEN');

    // Check whether the token is expired and return
    // true or false
    return !!token;
  }

}
