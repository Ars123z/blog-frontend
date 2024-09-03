import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  auth = inject(AuthService)

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')

  })

  onSubmit() {
    const data = {
      "email": this.registerForm.value.email,
      "first_name": this.registerForm.value.firstName,
      "last_name": this.registerForm.value.lastName,
      "password": this.registerForm.value.password,
      "password2": this.registerForm.value.confirmPassword
    }

    this.auth.register(data).subscribe(data => console.log(data))

    console.log(this.registerForm.value.firstName)
    console.log(this.registerForm.value.lastName)
    console.log(this.registerForm.value.email)
    console.log(this.registerForm.value.password)
    console.log(this.registerForm.value.confirmPassword)
  }
}
