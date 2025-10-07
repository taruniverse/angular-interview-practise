import { Routes } from '@angular/router';
import { Signals } from './signals/signals';
import { Routers } from './routers/routers';

export const routes: Routes = [
  // 1. path - URL path segment
  // 2. component - Component to display
  // 3. redirectTo - redirectTo to another route
  // 4. pathMatch - pathMatch 'full' or 'prefix' matching
  // 5. children - nested routes
  // 6. resolve - Data pre-fetch before load
  // 7. loadComponent - lazy-load standalone component
  // 8. loadChildren - lazy-load module ( deprecated by loadComponent)
  // 9. data - static route data
  // 10. title - browser tab title 
  
  // Gaurds
  // 1. canDeactivate - Route guard (before leaving the route)
  // 2. canActivate - Route guard (before activating the route)
  // 3. canLoad - Route guard (before lazy load)
  // 4. canMatch - Route guard (before matching route)


  // Router Lifecycle hooks
  // 1. NavigationStart
  // 2. RoutesRecognized
  // 3. GuardsCheckStart
  // 4. GuardsCheckEnd
  // 5. ResolveStart
  // 6. ResolveEnd
  // 7. NavigationEnd
  // 8. NavigationCancel
  // 9. NavigationError
  // 10. Scroll
  {
    path: 'signals',
    component: Signals,
  },
  {
    path: 'routers',
    component: Routers,
  },
  {
    path: 'routers/:id',
    component: Routers,
  },
];
