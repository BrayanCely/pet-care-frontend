import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mis-mascotas',
  imports: [FormsModule],
  templateUrl: './mis-mascotas.html',
  styleUrl: './mis-mascotas.css',
})
export class MisMascotas {
  private http = inject(HttpClient);

  vista = signal<'ver' | 'anadir'>('ver');
  mascotas = signal<any[]>([]);
  cargando = signal(false);
  mensaje = signal('');
  error = signal('');

  nueva = { nombre: '', especie: '', raza: '', fecha_nacimiento: '' };

  constructor() {
    this.cargar();
  }

  mostrar(v: 'ver' | 'anadir') {
    this.vista.set(v);
    this.mensaje.set('');
    this.error.set('');
    if (v === 'ver') this.cargar();
  }

  cargar() {
    this.cargando.set(true);
    // CAMBIO 1: URL directa a Azure y sin /api
    this.http.get<any[]>('http://68.211.178.234:8000/mascotas/mis-mascotas').subscribe({
      next: (data) => {
        this.mascotas.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar tus mascotas');
        this.cargando.set(false);
      },
    });
  }

  guardar() {
    this.error.set('');
    this.mensaje.set('');
    const body: any = { ...this.nueva };
    if (!body.fecha_nacimiento) delete body.fecha_nacimiento;
    if (!body.raza) delete body.raza;

    // CAMBIO 2: URL directa a Azure y CON barra al final
    this.http.post('http://68.211.178.234:8000/mascotas/', body).subscribe({
      next: () => {
        this.nueva = { nombre: '', especie: '', raza: '', fecha_nacimiento: '' };
        this.mensaje.set('¡Mascota añadida!');
        this.mostrar('ver');
        this.mensaje.set('¡Mascota añadida!');
      },
      error: (err) => this.error.set(`No se pudo guardar la mascota (error ${err.status})`),
    });
  }
}