/* eslint-disable func-names */
/* eslint-disable no-new */
/* global $ document */

import '../../utilities/jquery-global';
import '../../utilities/polyfills';
import Header from '../../components/header/header';
import ButtonLike from '../../components/button/button';
import Donut from '../../components/donut/donut';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const buttonsLike = document.querySelectorAll('.js-button');
buttonsLike.forEach((button) => new ButtonLike(button));

const $donuts = $('.js-donut');
$donuts.each(function () {
  new Donut($(this));
});
