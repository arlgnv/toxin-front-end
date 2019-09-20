/* global $ */
const $checkbox = $('.js-checkbox-expandable');
const $checkboxTitle = $checkbox.find('.checkbox-expandable__title');
const $checkboxList = $checkbox.find('.checkbox-expandable__list');

$checkboxTitle.click(() => {
  $checkbox.toggleClass('checkbox-expandable_expanded');

  $checkboxList.slideToggle(0);
});
