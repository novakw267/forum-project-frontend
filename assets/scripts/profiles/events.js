'use strict';
const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onCreateProfile = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.profile(data)
    .then(ui.createProfileSuccess)
    .catch(ui.failure);
};

const onUpdateProfile = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.updateProfile(store.user.id, data)
    .then(ui.updateProfileSuccess)
    .catch(ui.failure);
};

// const test = function(event) {
//   event.preventDefault();
//   console.log('working?');
// };
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp);
//   $('#sign-in').on('submit', onSignIn);
//   $('#change-password').on('submit', onChangePassword);
//   $('#sign-out').on('submit', onSignOut);
// };

const profHandlers = () => {
    $('#create_profile').on('submit', onCreateProfile);
    $('#update_profile').on('submit', onUpdateProfile);

};

module.exports = {
 profHandlers,
 onUpdateProfile,
};
