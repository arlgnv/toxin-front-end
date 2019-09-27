/* global $ */
const $mainHeaderBurger = $('.js-header__burger');
const $mainHeaderNavigation = $mainHeaderBurger.next();

$mainHeaderBurger.click((evt) => {
  evt.preventDefault();

  $mainHeaderBurger.toggleClass('header__burger_theme_cross');
  $mainHeaderNavigation.toggleClass('header__navigation_opened');
});
