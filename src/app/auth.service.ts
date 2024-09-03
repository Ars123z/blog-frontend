declare const google: any;
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  register(data: any) {
    return this.http.post("http://127.0.0.1:8000/accounts/register/", data)
  }

  verifyEmail(data: any) {
    return this.http.post("http://127.0.0.1:8000/accounts/verify-email/", data)
  }

  logIn(data: any) {
    return this.http.post("http://127.0.0.1:8000/accounts/login/", data)
  }
  
  passwordResetRequest(data: any) {
    return this.http.post("http://127.0.0.1:8000/accounts/password-reset/", data)
  }

  passwordResetConfirm(data: any) {
    return this.http.patch("http://127.0.0.1:8000/accounts/set-new-password/", data)
  }

  googleLogIn(data: any) {
    return this.http.post("http://127.0.0.1:8000/social_accounts/google/", data)
  }

  googleLogOut() {
    google.accounts.id.disableAutoSelect();
    this.router.navigateByUrl('/');
  }


}
