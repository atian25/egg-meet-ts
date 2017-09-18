'use strict';
module.exports = app => {
  class GitHubService extends app.Service {
    * list(org) {
      // curl - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/egg/index.d.ts#L717
      return yield this.ctx.curl(`https://api.github.com/orgs/${org}/repos`, { dataType: 'json' });
    }
  }
  return GitHubService;
};
