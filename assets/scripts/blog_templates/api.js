'use strict';

const config = require('../config');

const store = require('../store');

const blog_post = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/blog_templates',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/blog_templates',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blog_templates/' + id,
    method: 'GET',
  });
};

const destroy = function(id){
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'DELETE',
  });
};

module.exports = {
  blog_post,
  index,
  show,
  destroy,
};
