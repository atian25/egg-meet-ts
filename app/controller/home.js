'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      // 1. ctx.body
      // 2. service is auto load `app/service/github.js` by egg-core
      this.ctx.body = yield this.ctx.service.github.list('egg');
      // 3. sayHi is auto load `app/extend/context.js` by egg-core
      this.ctx.sayHi();
    }
  }
  return HomeController;
};
