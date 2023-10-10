import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'animals',
        loadComponent: () =>
          import('../animals/animals.page').then((m) => m.AnimalsPage),
      },
      {
        path: 'favourites',
        loadComponent: () =>
          import('../favourites/favourites.page').then((m) => m.FavouritesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/animals',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/animals',
    pathMatch: 'full',
  },
];
