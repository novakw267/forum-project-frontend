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

const onGetProfileID = function() {
  // event.preventDefault();
  api.getProfile()
    // debugger;
    .then((response) => {
      console.log(response)
      store.profileID = response.profile.id;
    })
    .done(ui.getProfileSuccess)
    .fail(ui.getProfileFailure);
};
// store.profileID

const onUpdateProfile = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
   api.updateProfile(data)
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
 onGetProfileID,
 onUpdateProfile,
};
