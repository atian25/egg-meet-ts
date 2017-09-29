'use strict';

const path = require('path');

exports.validate = {
  package: 'egg-validate',
};

exports.simple = {
  path: path.join(__dirname, '../plugins/egg-plugin-simple'),
};
