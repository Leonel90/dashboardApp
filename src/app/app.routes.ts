import { Routes } from '@angular/router';

export const routes: Routes = [

  { /* Configuración de ruta principal dashboard*/
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    /* Configuración de ruta hijas existendes en la aplicación*/
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>  import('./dashboard/pages/user/user.component')
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
      },
      { /* Comodin para redireccionar y evitar error*/
        path:'', redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  },
  { /* configuración de ruta a dirigirse cuando inicie la aplicación redirigiendo a dashboard*/
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
