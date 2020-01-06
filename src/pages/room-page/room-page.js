import '../../utilities/jquery-global';
import '../../utilities/polyfills';
import Header from '../../components/header/header';
import ButtonLike from '../../components/button-like/button-like';
import Donut from '../../components/donut/donut';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const buttonsLike = document.querySelectorAll('.js-button-like');
buttonsLike.forEach((button) => new ButtonLike(button));

const $donuts = $('.js-donut');
$donuts.each((i, el) => new Donut($(el)));
