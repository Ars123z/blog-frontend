import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.css'
})
export class PasswordChangeComponent {
auth = inject(AuthService)
router = inject(Router)

passwordChangeForm = new FormGroup({
  oldPassword: new FormControl(''),
  newPassword: new FormControl('')
})

onSubmit() {}
}
