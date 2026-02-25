import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  newPassword = '';
  confirmPassword = '';
  showNew = false;
  showConfirm = false;
  isLoading = false;
  isSuccess = false;
  errorMessage = '';
  redirectCountdown = 3;
  email = '';
  otp = '';

  constructor() {
    this.email = localStorage.getItem('reset_email') || '';
    this.otp = localStorage.getItem('reset_otp') || '';
  }

  get strengthScore(): number {
    const p = this.newPassword;
    let score = 0;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^a-zA-Z0-9]/.test(p)) score++;
    if (p.length >= 8) score++;
    return score;
  }

  get strength(): 'Weak' | 'Fair' | 'Good' | 'Strong' {
    const s = this.strengthScore;
    if (s <= 1) return 'Weak';
    if (s <= 2) return 'Fair';
    if (s <= 3) return 'Good';
    return 'Strong';
  }

  get segmentActive(): number {
    const s = this.strengthScore;
    if (s <= 1) return 1;
    if (s <= 2) return 2;
    if (s <= 3) return 3;
    return 4;
  }

  get canSubmit(): boolean {
    return (
      this.strengthScore >= 3 &&
      this.newPassword === this.confirmPassword &&
      this.newPassword.length >= 8
    );
  }

  get hasMinLength(): boolean {
    return this.newPassword.length >= 8;
  }

  get hasUpper(): boolean {
    return /[A-Z]/.test(this.newPassword);
  }

  get hasNumber(): boolean {
    return /[0-9]/.test(this.newPassword);
  }

  get hasSpecial(): boolean {
    return /[^a-zA-Z0-9]/.test(this.newPassword);
  }

  resetPassword(): void {
    if (!this.canSubmit) return;
    this.errorMessage = '';
    this.isLoading = true;
    this.authService
      .resetPassword({
        email: this.email,
        otp: this.otp,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.isSuccess = true;
          localStorage.removeItem('reset_email');
          localStorage.removeItem('reset_otp');
          const id = setInterval(() => {
            this.redirectCountdown--;
            if (this.redirectCountdown < 0) {
              clearInterval(id);
              this.router.navigate(['/auth/login']);
            }
          }, 1000);
        },
        error: (e: Error) => {
          this.isLoading = false;
          this.errorMessage = e.message || 'Failed to reset password';
        }
      });
  }
}
