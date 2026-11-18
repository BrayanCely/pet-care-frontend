import { Component } from '@angular/core';

interface Producto {
  icono: string;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-tienda',
  imports: [],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  productos: Producto[] = [
    {
      icono: '🥣',
      nombre: 'Alimento premium para perro',
      descripcion: 'Croquetas nutritivas para perros adultos, con proteína de pollo y arroz. Bulto de 8 kg.',
      precio: 125000,
    },
    {
      icono: '🐟',
      nombre: 'Alimento para gato',
      descripcion: 'Comida balanceada con sabor a atún y salmón para gatos adultos. Bolsa de 3 kg.',
      precio: 68000,
    },
    {
      icono: '🦴',
      nombre: 'Snacks dentales',
      descripcion: 'Premios masticables que ayudan a limpiar los dientes y refrescan el aliento.',
      precio: 24000,
    },
    {
      icono: '🎾',
      nombre: 'Pelota resistente',
      descripcion: 'Juguete de caucho resistente para perros que aman correr y morder.',
      precio: 18000,
    },
    {
      icono: '🛏️',
      nombre: 'Cama acolchada',
      descripcion: 'Cama suave y lavable para que tu mascota descanse cómoda. Tamaño mediano.',
      precio: 89000,
    },
    {
      icono: '🦮',
      nombre: 'Correa y arnés',
      descripcion: 'Set ajustable y reforzado para paseos cómodos y seguros.',
      precio: 45000,
    },
    {
      icono: '🧼',
      nombre: 'Shampoo hipoalergénico',
      descripcion: 'Limpia suavemente y deja el pelaje brillante, sin irritar la piel. 500 ml.',
      precio: 32000,
    },
    {
      icono: '🐾',
      nombre: 'Rascador para gatos',
      descripcion: 'Torre con poste de sisal para que tu gato juegue, trepe y afile sus uñas.',
      precio: 98000,
    },
  ];

  precio(valor: number) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(valor);
  }
}