'use strict';

module.exports = app => {
  // `app.validator` is load by egg-core loader
  // user just need to define it at `config/plugin.js` with `package`
  app.validator.addRule('jsonString', (rule, value) => {
    try {
      JSON.parse(value);
    } catch (err) {
      return 'must be json string';
    }
  });

  // `app.inline` is load by egg-core loader
  // user just need to define it at `config/plugin.js` with `inline path`
  app.inline();
};
