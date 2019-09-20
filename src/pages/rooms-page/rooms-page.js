/* global $ window document */
import '../../utilities/jquery-global';
import 'ion-rangeslider';
import '../../components/main-header/main-header';
import '../../components/checkboxes/checkbox-expandable/checkbox-expandable';
import '../../components/range/range';
import { initComfortDropdown } from '../../components/dropdowns/dropdown';

// Filter
const $filter = $('.js-filter');
const $filterForm = $filter.find('.filter__form');
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
const inputDropdownComfort = document.querySelector('.js-dropdown-comfort');
inputDropdownComfort.addEventListener('click', initComfortDropdown);
