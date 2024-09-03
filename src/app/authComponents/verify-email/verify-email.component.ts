import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent {

auth = inject(AuthService)

emailVerificationForm = new FormGroup({
  otp: new FormControl(''),
})

onSubmit() {
let data = {
    "otp": this.emailVerificationForm.value.otp
   }
this.auth.verifyEmail(data).subscribe((res)=> console.log(res))
}
}
