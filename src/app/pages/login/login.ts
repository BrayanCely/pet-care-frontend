import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  correo = '';
  contrasena = '';
  verClave = signal(false);
  cargando = signal(false);
  error = signal('');

  entrar() {
    this.error.set('');
    this.cargando.set(true);
    this.auth.login(this.correo, this.contrasena).subscribe({
      next: () => this.router.navigate(['/inicio']),
      error: (err) => {
        this.cargando.set(false);
        this.error.set(
          err.status === 401 ? 'Correo o contraseña incorrectos' : 'No se pudo iniciar sesión',
        );
      },
    });
  }
}