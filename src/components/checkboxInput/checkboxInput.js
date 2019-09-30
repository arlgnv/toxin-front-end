/* global $ */
const $checkbox = $('.js-checkbox-input_theme_expandable');
const $checkboxGroupTitle = $checkbox.find('.checkbox-input__group-title');

$checkboxGroupTitle.click(() => $checkbox.toggleClass('checkbox-input_theme_expanded'));
