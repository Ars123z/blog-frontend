declare var google: any;
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  router = inject(Router)
  http = inject(HttpClient)
  auth = inject(AuthService)

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '1052004285488-dlvn54ak08vj1i6ek6maqacffupkdit3.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(resp: any) {
    if(resp) {
      let dataparsed = this.decodeToken(resp.credential)
      console.log(dataparsed)
      let data = {
        "access_token": resp.credential
      }
      this.auth.googleLogIn(data).subscribe((resp: any)=> {
        localStorage.setItem("access", resp.access_token)
        localStorage.setItem("refresh", resp.refresh_token)
        console.log(resp)
      })
      // sessionStorage.setItem("data", JSON.stringify(data))
      // this.http.post("http:localhost:8000/", data).subscribe(data => console.log(data))
      // this.router.navigateByUrl('/home') 
    }
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    const data = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }

    this.auth.logIn(data).subscribe((resp: any) => {
      localStorage.setItem("access", resp.access_token)
      localStorage.setItem("refresh", resp.refresh_token)
      console.log(resp)

    })
  }
}
