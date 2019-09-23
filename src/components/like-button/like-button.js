/* eslint-disable func-names */
/* global $ */

const $buttons = $('.js-like-button');
$buttons.each(function () {
  const $button = $(this);
  const $buttonText = $button.find('.like-button__text');

  $button.on('click', (evt) => {
    evt.preventDefault();

    $button.toggleClass('like-button_state_liked');

    if ($button.hasClass('like-button_state_liked')) $buttonText.html(`${+$buttonText.html() + 1}`);
    else $buttonText.html(`${+$buttonText.html() - 1}`);
  });
});
