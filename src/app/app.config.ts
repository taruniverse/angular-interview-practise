import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideLocationMocks } from '@angular/common/testing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, 
      withComponentInputBinding(), // auto bind route params into component @Input()
      withViewTransitions(), // Enable view transition animation
      withHashLocation(), // Use hash URLs (/#/route)
      withInMemoryScrolling({
        scrollPositionRestoration:'enabled', // enable - restores the previous scroll position on backward navigation, else sets the position to anchor if one is provided, or sets the scroll position to x=0, y=0(forward navigation) this option will be the default in the future  | top - sets the scroll to x=0 and y=0 on all the navigation
        anchorScrolling:'enabled', // anchor scroll is by default disabled, if enabled scrolls to the anchor element when the url is fragment
      }), // enabled customizable scrolling behavior for router navigation
      withEnabledBlockingInitialNavigation(),
      // provideLocationMocks(),
      withRouterConfig({
      // To enable reloading on the same URL, set this to 'reload'
      // Triggering data re-fetching: You can use it to force a component to re-initialize and fetch new data when its parameters change, even if the route path is the same. 
      // Implementing a "refresh" function: It allows you to build a refresh button that will re-execute the logic for the current route. 
      onSameUrlNavigation: 'reload',
    }))
  ]
};
