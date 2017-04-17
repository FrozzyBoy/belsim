import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};

    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.debug('CustomReuseStrategy:shouldDetach', route);
        return true;
    }

    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.debug('CustomReuseStrategy:store', route, handle);
        this.handlers[route.routeConfig.path] = handle;
    }

    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.debug('CustomReuseStrategy:shouldAttach', route);
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }

    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.debug('CustomReuseStrategy:retrieve', route);
        if (!route.routeConfig) return null;
        return this.handlers[route.routeConfig.path];
    }

    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
        return future.routeConfig === curr.routeConfig;
    }
}