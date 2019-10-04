/* eslint-disable no-new */
/* global $ document */

import '../../utilities/jquery-global';

import 'ion-rangeslider';
import Header from '../../components/header/header';
import CheckboxExpandable from '../../components/checkboxInput/checkboxInput';
import DropdownComfort from '../../components/dropdown/dropdownComfort';
import RangeSlider from '../../components/rangeSlider/rangeSlider';
import FilterRooms from '../../utilities/filterRooms';

const dropdownComfort = document.querySelector('.js-dropdown');
new DropdownComfort(dropdownComfort);

const header = document.querySelector('.js-header');
new Header(header);

const checkbox = document.querySelector('.js-checkbox-input');
new CheckboxExpandable(checkbox);

const $rangeSlider = $('.js-range-slider');
new RangeSlider($rangeSlider);

const filter = document.querySelector('.js-filter');
new FilterRooms(filter);
