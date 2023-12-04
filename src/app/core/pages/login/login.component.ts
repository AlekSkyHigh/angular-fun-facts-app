import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private AuthService: AuthService,
    private Router: Router) { }

  loginUser(form: NgForm) {

    const { email, password } = form.value

    if (form.invalid) { return }

    this.AuthService.login(email, password).subscribe({
      next: (data) => {

        localStorage.setItem('token', JSON.stringify(data));
        this.Router.navigate(['/'])
      },
      error: (err) => {
        let errorMessage = 'An error occurred while entering. Please try again.';

        if (err.error && err.error.message) {
          errorMessage = err.error.message;
        }

        window.alert(errorMessage);
      }

    })

  }
}
