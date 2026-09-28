import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  // ========================================
  // AUTH LAYOUT
  // ========================================
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },

      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((c) => c.Login),
      },

      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((c) => c.Register),
      },
    ],
  },

  // ========================================
  // MAIN LAYOUT
  // ========================================
  {
    path: 'pages',
    // component: MainLayout,
    loadComponent: () => import('./layouts/main-layout/main-layout').then((c) => c.MainLayout),
    children: [
      {
        path: 'home',
        // component: Home,
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'about',
        // component: About,
        loadComponent: () => import('./pages/about/about').then((c) => c.About),
      },
      {
        path: 'contact',
        // component: Contact,
        loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact),
      },
      {
        path: 'products',
        // component: Products,
        loadComponent: () => import('./pages/products/products').then((c) => c.Products),
      },
      {
        path: 'products/:id',
        // component: ProductDetails,
        loadComponent: () =>
          import('./pages/product-details/product-details').then((c) => c.ProductDetails),
      },

      // ====================================
      // DASHBOARD
      // ====================================

      {
        path: 'dashboard',
        // component: Dashboard,
        loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard),

        loadChildren: () =>
          import('./pages/dashboard/dashboard.routes').then((c) => c.DASHBOARD_ROUTES),
      },
    ],
  },

  {
    path: '**',
    // component: PageNotfound,
    loadComponent: () => import('./pages/page-notfound/page-notfound').then((c) => c.PageNotfound),
  },
];
