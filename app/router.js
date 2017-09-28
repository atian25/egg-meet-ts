'use strict';

/**
 * @param {EggApplication} app - app
 */
module.exports = app => {
  app.get('/', 'home.index');
};
