/* global $ */
const $mainHeaderBurger = $('.js-main-header__burger');
const $mainHeaderNavigation = $mainHeaderBurger.next();

$mainHeaderBurger.click((evt) => {
  evt.preventDefault();

  $mainHeaderBurger.toggleClass('main-header__burger_theme_cross');
  $mainHeaderNavigation.toggleClass('main-header__navigation_opened');
});
