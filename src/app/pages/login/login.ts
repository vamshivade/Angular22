import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);

  handleLogin() {
    this.router.navigateByUrl('/pages/home');
  }

  handleNavigateRegister() {
    this.router.navigate(['/register']);
  }
}
