import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/',
    component: 'yap-frontend',
    children: [
      {
        path: '/about',
        component: 'yap-about',
        action: async () => {
          await import('./page/About');
        }
      },
      {
        path: '/experience',
        component: 'yap-experience',
        action: async () => {
          await import('./page/Experience');
        },
      },
      {
        path: '/skills',
        component: 'yap-skills',
        action: async () => {
          await import('./page/Skills');
        },
      },
      {
        path: 'education',
        component: 'yap-education',
        action: async () => {
          await import('./page/Education');
        },
      },
    ]
  }
];

const outlet = document.getElementById('content');
export const router = new Router(outlet);
router.setRoutes(routes);