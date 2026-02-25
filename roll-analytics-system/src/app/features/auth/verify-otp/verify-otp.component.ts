import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss'
})
export class VerifyOtpComponent implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private timerSub?: Subscription;

  otpDigits: string[] = ['', '', '', '', '', ''];
  isLoading = false;
  errorMessage = '';
  timerSeconds = 150;
  email = '';

  get fullOtp(): string {
    return this.otpDigits.join('');
  }

  get timerDisplay(): string {
    const m = Math.floor(this.timerSeconds / 60);
    const s = this.timerSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('reset_email') || '';
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }

  startTimer(): void {
    this.timerSub = interval(1000).subscribe(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
      }
    });
  }

  onDigitInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);
    this.otpDigits[index] = value;
    if (value && index < 5) {
      const next = input.parentElement?.querySelectorAll('input')[index + 1];
      next?.focus();
    }
  }

  onDigitKeydown(index: number, event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.otpDigits[index - 1] = '';
      const prev = input.parentElement?.querySelectorAll('input')[index - 1];
      prev?.focus();
    }
  }

  onOtpPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, 6);
    for (let i = 0; i < 6; i++) {
      this.otpDigits[i] = pasted[i] || '';
    }
    const first = (event.target as HTMLElement).closest('.otp-inputs')?.querySelectorAll('input')[Math.min(pasted.length, 5)];
    (first as HTMLInputElement)?.focus();
  }

  verifyOtp(): void {
    if (this.fullOtp.length < 6) return;
    this.errorMessage = '';
    this.isLoading = true;
    this.authService.verifyOtp({ email: this.email, otp: this.fullOtp }).subscribe({
      next: () => {
        localStorage.setItem('reset_otp', this.fullOtp);
        this.router.navigate(['/auth/reset-password']);
      },
      error: (e: Error) => {
        this.isLoading = false;
        this.errorMessage = e.message || 'Invalid OTP';
      }
    });
  }

  resendOtp(): void {
    if (this.timerSeconds > 0) return;
    this.timerSub?.unsubscribe();
    this.timerSeconds = 150;
    this.startTimer();
    this.authService.sendOtp({ email: this.email }).subscribe();
  }
}
