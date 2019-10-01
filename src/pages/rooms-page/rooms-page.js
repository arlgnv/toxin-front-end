/* eslint-disable no-new */
/* global $ window document */

import '../../utilities/jquery-global';

import 'ion-rangeslider';
import Header from '../../components/header/header';
import '../../components/checkboxInput/checkboxInput';
import { initComfortDropdown } from '../../components/dropdown/dropdown';

const header = document.querySelector('.js-header');
new Header(header);

// Filter
const $filter = $('.js-filter');
const $filterForm = $filter.find('.filter__form');
const $filterShow = $filter.find('.filter__show-button');
const $filterClose = $filter.find('.filter__close-button');

$filterShow.click((evt) => {
  evt.preventDefault();

  $filterForm.addClass('filter__form_showed');

  $filterClose.removeClass('filter__close-button_hidden');
  $filterClose.css('left', `${$(window).width() - $filterClose.outerWidth()}px`);

  document.body.classList.add('scroll-none');
});

$filterClose.click((evt) => {
  evt.preventDefault();

  $filterForm.removeClass('filter__form_showed');

  $filterClose.addClass('filter__close-button_hidden');

  document.body.classList.remove('scroll-none');
});

// Dropdown comfort
const inputDropdownComfort = document.querySelector('.js-dropdown');
inputDropdownComfort.addEventListener('click', initComfortDropdown);


// Range slider

const $range = $('.js-range-slider');
const $rangeField = $range.find('.range-slider__field');
const $rangePrice = $range.find('.range-slider__price');

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
