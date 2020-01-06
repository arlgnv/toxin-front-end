import '../../utilities/jquery-global';
import '../../utilities/polyfills';
import '../../components/calendar/calendar';
import RangeSlider from '../../components/range-slider/range-slider';
import ButtonLike from '../../components/button-like/button-like';
import Header from '../../components/header/header';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const buttonsLike = document.querySelectorAll('.js-button-like');
buttonsLike.forEach((button) => new ButtonLike(button));

const $sliders = $('.js-range-slider');
$sliders.each((i, el) => new RangeSlider($(el)));
