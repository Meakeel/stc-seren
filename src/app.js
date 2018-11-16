import { Aurelia, PLATFORM } from 'aurelia-framework'
import { Router, RouterConfguration} from 'aurelia-router';


export class App {
  constructor() {
    this.message = 'Hello World!';
  }
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('pages/home'), nav: 0 },
      { route: 'users',            name: 'users',      moduleId: 'index', nav: 1, title: 'Users' }
    ]);
  }
}