import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private AuthService: AuthService,
    private Router: Router) { }

  registerUser(form: NgForm) {
    const { email, password, repass } = form.value

    if (form.invalid) { return }

    this.AuthService.register(email, password).subscribe({
      next: (data) => {

        localStorage.setItem('token', JSON.stringify(data));
        this.Router.navigate(['/'])
      },
      error: (err) => {
        let errorMessage = 'An error occurred while registering. Please try again.';

        if (err.error && err.error.message) {
          errorMessage = err.error.message;
        }

        window.alert(errorMessage);
      }

    })
  }
}
