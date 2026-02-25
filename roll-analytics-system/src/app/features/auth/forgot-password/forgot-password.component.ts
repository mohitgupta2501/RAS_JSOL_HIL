import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  email = '';
  isLoading = false;
  otpSent = false;
  errorMessage = '';

  sendOtp(): void {
    this.errorMessage = '';
    if (!validEmail(this.email)) {
      this.errorMessage = 'Invalid email format';
      return;
    }
    this.isLoading = true;
    this.authService.sendOtp({ email: this.email }).subscribe({
      next: () => {
        this.isLoading = false;
        this.otpSent = true;
        localStorage.setItem('reset_email', this.email);
      },
      error: (e: Error) => {
        this.isLoading = false;
        this.errorMessage = e.message || 'Failed to send OTP';
      }
    });
  }

  goToVerify(): void {
    this.router.navigate(['/auth/verify-otp']);
  }
}
