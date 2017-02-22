'use strict';
const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onCreateProfile = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.profile(data)
    .then(ui.success)
    .catch(ui.failure);
};

const addHandlers = () => {
    $('#create').on('submit', onCreateProfile);
};

module.export = {
  addHandlers,
};
