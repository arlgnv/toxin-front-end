/* global $ window document */
import '../../utilities/jquery-global';
import 'ion-rangeslider';
import '../../components/main-header/main-header';
import '../../components/checkbox/checkbox-expandable/checkbox-expandable';
import '../../components/range-slider/range-slider';
import { initComfortDropdown } from '../../components/dropdowns/dropdown';

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
const inputDropdownComfort = document.querySelector('.js-dropdown_type_comfort');
inputDropdownComfort.addEventListener('click', initComfortDropdown);
