import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  // imports: [RouterLink],
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private router = inject(Router);

  handleRegister() {
    this.router.navigate(['/login']);
  }

  handleNavigateLogin() {
    // this.router.navigate(['/']);
    this.router.navigateByUrl('/login');
  }
}
