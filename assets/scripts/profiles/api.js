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

const getProfile = function() {
  return $.ajax({
    url: config.apiOrigin + '/profiles/' + store.userId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const updateProfile = function (data) {
  return $.ajax({
    url: config.apiOrigin + "/profiles/" + store.profileID,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  profile,
  getProfile,
  updateProfile,
};
