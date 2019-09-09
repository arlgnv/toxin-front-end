/* global $ */
$('.c-checkbox-expandable__title').click(function toggleCheckbox() {
  $(this).toggleClass('c-checkbox-expandable__title_expanded');

  $(this).next().slideToggle(0);
});
