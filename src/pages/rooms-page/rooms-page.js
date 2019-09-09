/* global $ window document */
import '../../utilities/jquery-global';
import 'ion-rangeslider';
import '../../components/main-header/main-header';
import '../../components/checkboxes/checkbox-expandable/checkbox-expandable';
import { initComfortDropdown } from '../../components/field-dropdown/field-dropdown';

// Range
const $rangePrice = $('.c-range__price');
$('.c-range__field').ionRangeSlider({
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
const $filterShow = $('.js-filter__show-button');
const $filterClose = $('.js-filter__close-button');

$filterShow.click(function showFilter(evt) {
  evt.preventDefault();

  $(this).next().css('left', '0%');

  $filterClose.removeClass('filter__close-button_hidden');
  $filterClose.css('left', `${$(window).width() - $filterClose.outerWidth()}px`);

  document.body.style.overflow = 'hidden';
});

$filterClose.click(function closeFilter(evt) {
  evt.preventDefault();

  $(this).parent('.filter__form').css('left', '110%');
  $filterClose.addClass('filter__close-button_hidden');

  document.body.style.overflow = 'visible';
});

// Dropdown comfort
const inputDropdownComfort = document.querySelector('#field-comfort');
inputDropdownComfort.addEventListener('click', initComfortDropdown);
