import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/devices',
    pathMatch: 'full'
  },
  {
    path: 'devices',
    loadComponent: () => import('./pages/devices/devices-page.component').then(c => c.DevicesPageComponent)
  },
  {
    path: '**',
    redirectTo: '/devices'
  }
];
