/* eslint-disable func-names */
/* eslint-disable no-new */
/* global $ document */

import '../../utilities/jquery-global';

import '../../utilities/polyfills';

import 'ion-rangeSlider';

import Header from '../../components/header/header';
import CheckboxExpandable from '../../components/checkbox-input/checkbox-input';
import DropdownComfort from '../../components/dropdown/dropdownComfort';
import RangeSlider from '../../components/range-slider/range-slider';
import RoomsFilter from '../../utilities/rooms-filter';

const headers = document.querySelectorAll('.js-header');
headers.forEach(header => new Header(header));

const dropdownsComfort = document.querySelectorAll('.js-dropdown');
dropdownsComfort.forEach(dropdown => new DropdownComfort(dropdown));

const checkboxes = document.querySelectorAll('.js-checkbox-input');
checkboxes.forEach(checkbox => new CheckboxExpandable(checkbox));

const $sliders = $('.js-range-slider');
$sliders.each(function() {
  new RangeSlider($(this));
});

const filters = document.querySelectorAll('.js-filter');
filters.forEach(filter => new RoomsFilter(filter));
