'use strict';

/**
 * @param {EggTypes.Application} app - app
 */
module.exports = app => {
  app.get('/', 'home.index');
};
