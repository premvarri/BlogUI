import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  signup() {
    // Add your signup logic here (e.g., call your backend API)
    console.log('Signup Form Data:', {
      email: this.email,
      password: this.password,
    });
    this.router.navigate(['/login']);
  }
}
