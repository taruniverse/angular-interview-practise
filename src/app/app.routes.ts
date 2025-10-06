import { Routes } from '@angular/router';
import { Signals } from './signals/signals';
import { Routers } from './routers/routers';

export const routes: Routes = [
  {
    path: 'signals',
    component: Signals,
  },
  {
    path: 'routers',
    component: Routers,
  },
];
