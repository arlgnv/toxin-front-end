/* global $ */
const $checkbox = $('.js-checkbox-expandable');
const $checkboxList = $checkbox.find('.checkbox-expandable__list');

$checkbox.click(() => {
  $checkbox.toggleClass('checkbox-expandable_expanded');

  $checkboxList.slideToggle(0);
});
