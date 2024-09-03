import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-password-reset-confirm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-reset-confirm.component.html',
  styleUrl: './password-reset-confirm.component.css'
})
export class PasswordResetConfirmComponent {
  router = inject(Router)
  route = inject(ActivatedRoute)
  auth = inject(AuthService)
  passwordResetForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

onSubmit() {
  let data = {
    password: this.passwordResetForm.value.password,
    confirm_password: this.passwordResetForm.value.confirmPassword,
    uidb64: this.route.snapshot.paramMap.get('uid'),
    token: this.route.snapshot.paramMap.get('token')
  }

this.auth.passwordResetConfirm(data).subscribe(resp=> console.log(resp))

}

}
