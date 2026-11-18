import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/layout/layout').then((m) => m.Layout),
    children: [
      { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio) },
      { path: 'mis-mascotas', loadComponent: () => import('./pages/mis-mascotas/mis-mascotas').then((m) => m.MisMascotas) },
      { path: 'tienda', loadComponent: () => import('./pages/tienda/tienda').then((m) => m.Tienda) },
      { path: 'veterinarias', loadComponent: () => import('./pages/veterinarias/veterinarias').then((m) => m.Veterinarias) },
      { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then((m) => m.Perfil) },
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    ],
  },
  { path: '**', redirectTo: '' },
];