import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

interface LoginResponse {
  access_token: string;
  token_type: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private readonly KEY = 'peludos_token';

  login(correo: string, contrasena: string) {
  const body = new HttpParams().set('username', correo).set('password', contrasena);
  return this.http
    .post<LoginResponse>('/api/auth/login', body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .pipe(tap((res) => localStorage.setItem(this.KEY, res.access_token)));
}

  get token() {
    return localStorage.getItem(this.KEY);
  }

  isLoggedIn() {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem(this.KEY);
    this.router.navigate(['/login']);
  }
}