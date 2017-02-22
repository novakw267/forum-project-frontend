'use strict';

const config = require('../config');

const store = require('../store');

const profile = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/profiles/create',
    method: 'POST',
    data,
  });
};
module.exports = {
  profile,
};
