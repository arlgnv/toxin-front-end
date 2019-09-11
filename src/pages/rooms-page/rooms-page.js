/* global $ window document */
import '../../utilities/jquery-global';
import 'ion-rangeslider';
import '../../components/main-header/main-header';
import '../../components/checkboxes/checkbox-expandable/checkbox-expandable';
import { initComfortDropdown } from '../../components/field-dropdown/field-dropdown';

// Range
const $rangeField = $('.range__field');
const $rangePrice = $('.range__price');
$rangeField.ionRangeSlider({
  skin: 'custom',
  type: 'double',
  min: 0,
  max: 15000,
  hide_min_max: true,
  from: 5000,
  to: 10000,
  hide_from_to: true,
  onStart: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
  onChange: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
});

// Filter
const $filter = $('.js-filter');
const $filterForm = $('.filter__form');
const $filterShow = $filter.find('.filter__show-button');
const $filterClose = $filter.find('.filter__close-button');

$filterShow.click((evt) => {
  evt.preventDefault();

  $filterForm.css('left', '0%');

  $filterClose.removeClass('filter__close-button_hidden');
  $filterClose.css('left', `${$(window).width() - $filterClose.outerWidth()}px`);

  document.body.style.overflow = 'hidden';
});

$filterClose.click((evt) => {
  evt.preventDefault();

  $filterForm.css('left', '110%');

  $filterClose.addClass('filter__close-button_hidden');

  document.body.style.overflow = 'visible';
});

// Dropdown comfort
const inputDropdownComfort = document.querySelector('[data-dropdown=comfort]');
inputDropdownComfort.addEventListener('click', initComfortDropdown);
