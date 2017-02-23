'use strict';

const signUpSuccess = () => {
  // if (data) {
    $('#create_profile').removeClass('hidden');
    $('#Signup-message').addClass('hidden');
    $('#username').removeClass('hidden');
    $('#favorite_band').removeClass('hidden');
    $('#favorite_genre').removeClass('hidden');
    // $('#title').removeClass('hidden');
    // $('#subject').removeClass('hidden');
    // $('#body').removeClass('hidden');
    // $('#title_label').removeClass('hidden');
    // $('#subject_label').removeClass('hidden');
    $('#create').removeClass('hidden');
    // $('#new-blog').removeClass('hidden');
    // $('#body_label').removeClass('hidden');
    $('#sign-up').addClass('hidden');
    $('#sign-in').addClass('hidden');
    $('#sign-in')[0].reset();
    $('#sign-up')[0].reset();
  // }
};

const signInSuccess = (data) => {
  // // $('#winMessage').text('Congradulations on signing up!');
  $('#user-name').removeClass('hidden');
  $('#favorite-band').removeClass('hidden');
  $('#favorite-genre').removeClass('hidden');
  $('#change-password').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#new-blog').removeClass('hidden');
  $('#update_profile').removeClass('hidden');
  $('#update').removeClass('hidden');
  // // $('#winMessage').text(data.email + ' has signed in!');
  $('#title').removeClass('hidden');
  $('#subject').removeClass('hidden');
  $('#body').removeClass('hidden');
  $('#title_label').removeClass('hidden');
  $('#subject_label').removeClass('hidden');
  $('#body_label').removeClass('hidden');
  // // hide forms we want
  $('#Signup-message').addClass('hidden');
  $('#sign-up').addClass('hidden');
  $('#sign-in').addClass('hidden');
  $('#sign-in')[0].reset();
  $('#sign-up')[0].reset();
};

//displays a message and clears on a successful change password
const changePwSuccess = () => {
  $('#winMessage').text('Changing your password? You smartie pants.');
  $('#change-password')[0].reset();
};

//change back to how it looked before you signed in.
const signOutSuccess = () => {
  $('#create_profile').addClass('hidden');
  $('#Signup-message').addClass('hidden');
  $('#username').addClass('hidden');
  $('#favorite_band').addClass('hidden');
  $('#favorite_genre').addClass('hidden');
  $('#title').addClass('hidden');
  $('#subject').addClass('hidden');
  $('#body').addClass('hidden');
  $('#title_label').addClass('hidden');
  $('#subject_label').addClass('hidden');
  $('#create').addClass('hidden');
  $('#new-blog').addClass('hidden');
  $('#body_label').addClass('hidden');
  $('#change-password').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#sign-up').removeClass('hidden');
  $('#sign-in').removeClass('hidden');
};

const failure = () => {
  $('#change-password')[0].reset();
  return $('#winMessage').text('Try again, something went wrong.');
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePwSuccess
};
