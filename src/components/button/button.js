/* eslint-disable func-names */
/* global $ */

const $buttons = $('.js-button_theme_like');

$buttons.each(function () {
  const $button = $(this);
  const $buttonText = $button.find('.button__text');

  $button.on('click', (evt) => {
    evt.preventDefault();

    $button.toggleClass('button_theme_liked');

    if ($button.hasClass('button_theme_liked')) $buttonText.html(`${+$buttonText.html() + 1}`);
    else $buttonText.html(`${+$buttonText.html() - 1}`);
  });
});
