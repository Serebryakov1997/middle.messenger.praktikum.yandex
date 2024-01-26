import { PageError } from '../../views';
import { Block } from '../Block/block';
import { Route } from './route';

class Router {
  /* eslint no-use-before-define: "off" */
  static __instance: Router;

  routes: Route[] = [];

  history: History = window.history;

  _currentRoute: Route | undefined;

  constructor() {
    if (Router.__instance) {
      /* eslint no-constructor-return: "off" */
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;

    Router.__instance = this;
  }

  use(block: Block, pathname = '/') {
    const route = new Route(pathname, block);
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event: Event) => {
      const { currentTarget } = event;
      this._onRoute((currentTarget as Window).location.pathname);
    });
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname);
    if (!route) {
      const route404 = new Route(pathname, new PageError('404', 'Не туда попали'));
      const route500 = new Route(pathname, new PageError('500', 'Мы уже фиксим'));
      route = route404 || route500;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router();
