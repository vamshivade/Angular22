import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../dashboard-home/dashboard-home').then((c) => c.DashboardHome),
  },

  {
    path: 'profile',
    loadComponent: () => import('../profile/profile').then((c) => c.Profile),
  },

  {
    path: 'orders',
    loadComponent: () => import('../orders/orders').then((c) => c.Orders),
  },

  {
    path: 'settings',
    loadComponent: () => import('../settings/settings').then((c) => c.Settings),
  },
];
