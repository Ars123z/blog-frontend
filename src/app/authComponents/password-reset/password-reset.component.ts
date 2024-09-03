import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  auth = inject(AuthService)

passwordResetRequestForm = new FormGroup({
  email: new FormControl('')
})



onSubmit() {
  const data = {
    email: this.passwordResetRequestForm.value.email
  }
this.auth.passwordResetRequest(data).subscribe(resp=> console.log(resp))

}
}
