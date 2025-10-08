import { Component, Input, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, UrlTree } from '@angular/router';

@Component({
  selector: 'app-routers',
  imports: [RouterModule],
  templateUrl: './routers.html',
  styleUrl: './routers.css',
})
export class Routers {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  @Input() id!: string;

  constructor() {
    const getID = this.activeRoute.snapshot.paramMap.get('id'); // we can access the url params
  }

  test() {
    this.id;
  }

  methodsForRouter() {
    console.log(this.id);

    this.router.navigate(['/routers', 12]); // navigate to particular route if we want to pass any id or params we can pass through it.
    this.router.navigateByUrl('/routers'); //  navigate to particular route don't accepts params as parameters

    // createurltree method start // createUrlTree() does not directly navigate; it constructs a UrlTree object.

    // Also  // Converting structured URL data to a string // Customizing URL serialization
    const createurlTreewithAngular = () => {
      const tree = this.router.createUrlTree(['/team', 33, { expand: true }, 'user', 11], {
        queryParams: { teamid: 2123 },
        relativeTo: this.activeRoute,
      });
      console.log(tree);
      const serializedURLTree = this.router.serializeUrl(tree);
      console.log(serializedURLTree);

      // creates a url tree or to generate a URL string.

      // basic pattern
      const urlCreationOption = this.router.createUrlTree(['/routers', 'details', 123]);
      console.log(urlCreationOption);
      const serializedURLurlCreationOption = this.router.serializeUrl(urlCreationOption);
      console.log(serializedURLurlCreationOption);
      // urlCreationOption will create a url tree representing '/routers/details/123'

      // queryparams
      const queryParamTree = this.router.createUrlTree(['/routers'], {
        queryParams: { q: 'angular', category: 'framework' },
      });
      console.log(queryParamTree);
      const serializedURLqueryParamTree = this.router.serializeUrl(queryParamTree);
      console.log(serializedURLqueryParamTree);
      // queryParamTree will create a url tree representing 'routers?q=angular&category=framework'

      // fragment
      const urlFragmentTree = this.router.createUrlTree(['/routers'], { fragment: 'section-2' });
      console.log(urlFragmentTree);
      const serializedURLFragmentTree = this.router.serializeUrl(urlFragmentTree);
      console.log(serializedURLFragmentTree);
      // urlFragmentTree will create a url tree representing 'routers#section-2'
      // It provides a flexible way to build URLs programmatically, handling path segments, query parameters, and fragments.

      // current route
      const currentTreeRoute = this.router.createUrlTree(['edit'], {
        queryParams: { id: 2 },
        relativeTo: this.activeRoute,
      });
      console.log(currentTreeRoute);
      const serializedURLcurrentTreeRoute = this.router.serializeUrl(currentTreeRoute);
      console.log(serializedURLcurrentTreeRoute);
      // currentTreeRoute will create a url tree -> current url looks like '/routers/123' then it will might create like -> 'routers/123/edit'
      // The relativeTo option is crucial for constructing URLs relative to the currently active route.
    };
    createurlTreewithAngular();
    // createurltree method ends

    // parse url start
    const parseURLRoute = () => {
      const parsedURL = this.router.parseUrl('asdaadasda'); // parseUrl method converts normal string url to URLTree Object, which provide hierarchiccal representation
      console.log(parsedURL);
    };
    parseURLRoute();
    // parse url end

    // isActiveURL // Deprecated
    const isActiveUrlMethod = () => {
      const isActive = this.router.isActive('router', true); // isActive is deprecated in angular 19,20
      console.log(isActive);
    };
    isActiveUrlMethod();
    // /

    // get current navigation url
    const getCurrNavMethod = () => {
      const currentNav = this.router.currentNavigation();
      console.log(currentNav);
    };

    getCurrNavMethod();
    // get current navigation url
  }
}
