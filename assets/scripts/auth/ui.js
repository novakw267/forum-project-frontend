'use strict';

const signUpSuccess = (data) => {
  if (data) {
    // // $('#winMessage').text('Congradulations on signing up!');
    $('#change-password').removeClass('hidden');
    $('#sign-out').removeClass('hidden');
    $('#new-blog').removeClass('hidden');
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
    console.log(data);
  }
};

const signInSuccess = (data) => {
  // unhide forms we want
  $('#change-password').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#new-blog').removeClass('hidden');
  // $('#winMessage').text(data.email + ' has signed in!');
  $('#title').removeClass('hidden');
  $('#subject').removeClass('hidden');
  $('#body').removeClass('hidden');
  $('#title_label').removeClass('hidden');
  $('#subject_label').removeClass('hidden');
  // hide forms we want
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
  $('#change-password').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#new-blog').addClass('hidden');
  $('#search-blogs').addClass('hidden');
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
