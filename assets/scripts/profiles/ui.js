'use strict';
const createProfileSuccess = (data) => {
  if (data) {
    $('#create_profile').removeClass('hidden');
    $('#username').removeClass('hidden');
    $('#favorite_band').removeClass('hidden');
    $('#favorite_genre').removeClass('hidden');
    $('#title').removeClass('hidden');
    $('#subject').removeClass('hidden');
    $('#body').removeClass('hidden');
    $('#title_label').removeClass('hidden');
    $('#subject_label').removeClass('hidden');
    $('#update').removeClass('hidden');
    $('#new-blog').removeClass('hidden');
    $('#body_label').removeClass('hidden');
    $('#Signup-message').addClass('hidden');
    $('#sign-up').addClass('hidden');
    $('#sign-in').addClass('hidden');
    $('#sign-in')[0].reset();
    $('#sign-up')[0].reset();
  }
};

module.export = {
  createProfileSuccess,
};
