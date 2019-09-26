/* global $ */
const $mainHeaderBurger = $('.js-main-header__burger');

$mainHeaderBurger.click((evt) => {
  evt.preventDefault();

  $mainHeaderBurger.toggleClass('main-header__burger_opened');
  $mainHeaderBurger.next().slideToggle(1000);
});
