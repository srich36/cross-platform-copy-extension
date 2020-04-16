import CopyPage from './pages/CopyPage';
import PastePage from './pages/PastePage';
import LoginPage from './pages/LoginPage';
import AppHome from '../AppHome';

export default [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/app',
    component: AppHome,
    children: [
      {
        path: 'copy',
        component: CopyPage,
        name: 'copyHome',
      },
      {
        path: 'paste',
        component: PastePage,
        name: 'pasteHome',
      },
    ],
  },
];
