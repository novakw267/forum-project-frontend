
'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
};
Contact GitHub API Training Shop Blog About
