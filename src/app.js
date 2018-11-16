export class App {
  constructor() {
    this.message = 'Hello World!';
  }
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'pages/home', nav: 0 },
      { route: 'users',            name: 'users',      moduleId: 'users/index', nav: 1, title: 'Users' },
      { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail', nav: 2 },
      { route: 'files/*path',      name: 'files',      moduleId: 'files/index', nav: 3,    title: 'Files', href:'#files' }
    ]);
  }
}
