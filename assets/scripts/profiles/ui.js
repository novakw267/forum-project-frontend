'use strict';
const createProfileSuccess = () => {
    $('#create_profile').addClass('hidden');
    $('#username').addClass('hidden');
    $('#favorite_band').addClass('hidden');
    $('#favorite_genre').addClass('hidden');
    $('#title').removeClass('hidden');
    $('#subject').removeClass('hidden');
    $('#body').removeClass('hidden');
    $('#title_label').removeClass('hidden');
    $('#subject_label').removeClass('hidden');
    $('#update').removeClass('hidden');
    $('#new-blog').removeClass('hidden');
    $('#body_label').removeClass('hidden');
    $('#Signup-message').addClass('hidden');
    $('#update_profile').removeClass('hidden');
    $('#user-name').removeClass('hidden');
    $('#favorite-band').removeClass('hidden');
    $('#favorite-genre').removeClass('hidden');
    $('#sign-out').removeClass('hidden');
    $('#sign-up').addClass('hidden');
    $('#sign-in').addClass('hidden');
    $('#sign-in')[0].reset();
    $('#sign-up')[0].reset();
};

const onUpdateProfile = () => {

};

module.exports = {
  createProfileSuccess,
};
