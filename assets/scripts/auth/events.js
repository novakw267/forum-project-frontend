'use strict';

const getFormFields = require(`../../../lib/get-form-fields.js`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onSignUp = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  console.log(data);
  let signInData = {
    credentials: {
      email: data.credentials.email,
      password: data.credentials.password,
    }
  };
  api.signUp(data)
  .then(() => {
    api.signIn(signInData)
      .then((response) => {
        store.user = response.user;
        return store.user;
      })
      .then(ui.signUpSuccess)
      .catch(ui.failure);
  })
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    // can only have 1 .then
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.failure);
  // return $('#winMessage').text('Changing your password? You smartie pants.');
};

const onSignOut = function(event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user.id;
      ui.signOutSuccess();
      return store;
    });
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
