/* global $ */
$('.main-header__burger').click(function toggleHeader(event) {
  event.preventDefault();

  $(this).toggleClass('main-header__burger_opened');
  $(this).next().slideToggle(1000);
});
