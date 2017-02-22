'use strict';
const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onCreateProfile = function(event) {
  event.preventDefault();
  console.log('lol');

  let data = getFormFields(event.target);

  api.profiles(data);

  console.log('lol')
    .then(ui.createProfileSuccess)
    .catch(ui.failure);
};

const test = function() {
  console.log('working?');
};
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp);
//   $('#sign-in').on('submit', onSignIn);
//   $('#change-password').on('submit', onChangePassword);
//   $('#sign-out').on('submit', onSignOut);
// };

const profHandlers = () => {
    $('#create').on('submit', onCreateProfile);
    $('#create_profile').on('click', test);

};

module.exports = {
 profHandlers,
 test,
};
