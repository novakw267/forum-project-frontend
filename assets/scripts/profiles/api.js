'use strict';

const config = require('../config');

const store = require('../store');

const profile = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/profiles',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const updateProfile = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/profiles',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};
module.exports = {
  profile,
  updateProfile,
};
