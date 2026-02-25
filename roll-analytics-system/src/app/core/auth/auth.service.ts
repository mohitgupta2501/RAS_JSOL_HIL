import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import {
  LoginRequest,
  LoginResponse,
  UserInfo,
  ForgotPasswordRequest,
  VerifyOtpRequest,
  ResetPasswordRequest
} from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly TOKEN_KEY = 'ras_access_token';
  private readonly REFRESH_KEY = 'ras_refresh_token';
  private readonly USER_KEY = 'ras_user';

  private generateMockToken(email?: string): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(
      JSON.stringify({
        sub: 'user123',
        email: email || 'admin@jindal.com',
        name: 'Admin User',
        role: 'admin',
        shift: 'A',
        iat: Date.now(),
        exp: Date.now() + 86400000
      })
    );
    const signature = btoa('mock_signature');
    return `${header}.${payload}.${signature}`;
  }

  login(req: LoginRequest): Observable<LoginResponse> {
    if (req.email === 'admin@jindal.com' && req.password === 'Admin@123') {
      return of({
        accessToken: this.generateMockToken(req.email),
        refreshToken: this.generateMockToken(req.email),
        user: {
          id: '1',
          name: 'Admin User',
          email: 'admin@jindal.com',
          role: 'admin',
          shift: 'A'
        }
      }).pipe(
        delay(1200),
        tap((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.accessToken);
          localStorage.setItem(this.REFRESH_KEY, res.refreshToken);
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
        })
      );
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  sendOtp(
    req: ForgotPasswordRequest
  ): Observable<{ success: boolean; message: string }> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(req.email)) {
      return of({
        success: true,
        message: 'OTP sent to your email'
      }).pipe(delay(1000));
    }
    return throwError(() => new Error('Email not found'));
  }

  verifyOtp(req: VerifyOtpRequest): Observable<{ success: boolean }> {
    if (req.otp === '123456') {
      return of({ success: true }).pipe(delay(800));
    }
    return throwError(() => new Error('Invalid OTP'));
  }

  resetPassword(
    req: ResetPasswordRequest
  ): Observable<{ success: boolean; message: string }> {
    if (req.newPassword === req.confirmPassword) {
      return of({
        success: true,
        message: 'Password reset successful'
      }).pipe(delay(1000));
    }
    return throwError(() => new Error('Passwords do not match'));
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): UserInfo | null {
    const u = localStorage.getItem(this.USER_KEY);
    return u ? JSON.parse(u) : null;
  }
}
