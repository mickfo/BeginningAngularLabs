import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { CounterDemo } from './pages/counter-demo';

// named "modes" for your application.
// you can switch modes through using the routerLink directive, you can do it programatically using the router service, etc.
// the mode is reflected in the url displayed in the browser.
// this is awesome.
export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'counter',
    component: CounterDemo,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
