/* global $ document */
/* eslint-disable no-new */

import '../../utilities/jquery-global';

import 'ion-rangeslider';
import 'air-datepicker';

import RangeSlider from '../../components/rangeSlider/rangeSlider';
import Header from '../../components/header/header';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const $rangeSlider = $('.js-range-slider');
new RangeSlider($rangeSlider);
