import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Log the form data to the console
    console.log('Login Form Data:', {
      email: this.email,
      password: this.password,
    });

    // Add your login logic here (e.g., call your backend API)
    // On successful login, navigate to the blogs page
    this.router.navigate(['/blogs']);
  }
  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
