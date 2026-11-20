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
    // Creamos el objeto JSON con los nombres exactos que espera tu backend
    const body = {
      correo_electronico: correo,
      contrasena: contrasena
    };

    return this.http
      // Apuntamos directo a la IP de Azure con el puerto 8000
      .post<LoginResponse>('http://68.211.178.234:8000/auth/login', body)
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