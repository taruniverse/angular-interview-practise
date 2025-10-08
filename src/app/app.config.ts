import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withDisabledInitialNavigation,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withDebugTracing(), // log all the lifecycle from route start to end whatever checks are required
      withDisabledInitialNavigation(), // Use if there is a reason to have more control over when the router starts its initial navigation due to some complex initialization logic.
      withEnabledBlockingInitialNavigation(), // Configures initial navigation to start before the root component is created. | The bootstrap is blocked until the initial navigation is complete. This should be set in case you use server-side rendering, but do not enable hydration for your application.
      // withHttpTransferCacheOptions()
      // withPreloading(),
      // withNavigationErrorHandler(),
      // provideLocationMocks(),
      withComponentInputBinding(), // auto bind route params into component @Input()
      withViewTransitions(), // Enable view transition animation
      withHashLocation(), // Use hash URLs (/#/route)
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // enable - restores the previous scroll position on backward navigation, else sets the position to anchor if one is provided, or sets the scroll position to x=0, y=0(forward navigation) this option will be the default in the future  | top - sets the scroll to x=0 and y=0 on all the navigation
        anchorScrolling: 'enabled', // anchor scroll is by default disabled, if enabled scrolls to the anchor element when the url is fragment
      }), // enabled customizable scrolling behavior for router navigation
      withRouterConfig({
        // To enable reloading on the same URL, set this to 'reload'
        // Triggering data re-fetching: You can use it to force a component to re-initialize and fetch new data when its parameters change, even if the route path is the same.
        // Implementing a "refresh" function: It allows you to build a refresh button that will re-execute the logic for the current route.
        onSameUrlNavigation: 'reload',
      })
    ),
  ],
};
