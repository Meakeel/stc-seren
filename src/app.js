import { Aurelia, PLATFORM } from 'aurelia-framework'
import { Router, RouterConfguration} from 'aurelia-router';


export class App {
  constructor() {
  }
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Talk to seren';
    config.map([
      { route: ['', 'home'],     name: 'home',      moduleId: PLATFORM.moduleName('pages/home'), nav: 0, title: 'Home' },
      { route: 'map',            name: 'map',       moduleId: PLATFORM.moduleName('pages/map'), nav: 1, title: 'Speak to Someone' },
      { route: 'get-involved',   name: 'volunteer', moduleId: PLATFORM.moduleName('pages/volunteer'), nav: 2, title: 'Get Involved' },
      { route: 'donate',         name: 'donate',    moduleId: PLATFORM.moduleName('pages/donate'), nav: 3, title: 'Donate' }
    ]);
  }
}