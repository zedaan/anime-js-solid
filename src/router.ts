import { lazy } from 'solid-js';
import About from './containers/About';
import App from './containers/App';
import NotFound from './containers/404';

const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    component: App
  },
  {
    path: "*all",
    component: NotFound
  }
]

export default routes;
