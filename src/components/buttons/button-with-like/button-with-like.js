/* eslint-disable func-names */
/* global $ */
const $buttons = $('.js-button_with-like');
$buttons.each(function () {
  const $button = $(this);

  $button.on('click', (evt) => {
    evt.preventDefault();

    $button.toggleClass('button_with-like_liked');

    if ($button.hasClass('button_with-like_liked')) $button.html(`${+$button.html() + 1}`);
    else $button.html(`${+$button.html() - 1}`);
  });
});
