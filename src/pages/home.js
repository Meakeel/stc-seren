import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Home {
  constructor(router) {
    this.router = router;
    this.message = 'Hello World!';
  }

  goToMap()
  {
    this.router.navigateToRoute('map');
  }

  gotoVolunteer()
  {
    this.router.navigateToRoute('volunteer');
  }
}
