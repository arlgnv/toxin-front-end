/* global $ */
$('[data-checkbox=expandable]').click(function toggleCheckbox() {
  $(this).toggleClass('checkbox-expandable_expanded');

  const $list = $(this).find('.checkbox-expandable__list');
  $list.slideToggle(0);
});
