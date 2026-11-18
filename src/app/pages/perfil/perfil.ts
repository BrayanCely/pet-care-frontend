import { Component, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  private http = inject(HttpClient);

  usuario = signal<any | null>(null);
  mascotas = signal<any[]>([]);
  cargando = signal(true);
  error = signal('');

  constructor() {
    this.http.get<any>('/api/usuarios/me').subscribe({
      next: (u) => this.usuario.set(u),
      error: () => this.error.set('No se pudo cargar tu información'),
    });

    this.http.get<any[]>('/api/mascotas/mis-mascotas').subscribe({
      next: (m) => {
        this.mascotas.set(m);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }

  esGato(m: any) {
    return (m?.especie ?? '').toString().toLowerCase().includes('gat');
  }
}