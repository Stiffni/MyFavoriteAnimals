import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'animal',
    loadComponent: () => import('./animal/animal.page').then( m => m.AnimalPage)
  },
];
