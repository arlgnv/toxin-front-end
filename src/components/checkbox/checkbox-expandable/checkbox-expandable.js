/* global $ */
const $checkbox = $('.js-checkbox-expandable');
const $checkboxTitle = $checkbox.find('.checkbox-expandable__title');

$checkboxTitle.click(() => $checkbox.toggleClass('checkbox-expandable_expanded'));
