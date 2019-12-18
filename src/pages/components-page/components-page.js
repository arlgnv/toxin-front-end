import '../../utilities/jquery-global';
import '../../utilities/polyfills';
import '../../components/calendar/calendar';
import RangeSlider from '../../components/range-slider/range-slider';
import Header from '../../components/header/header';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const $sliders = $('.js-range-slider');
$sliders.each(function () {
  new RangeSlider($(this));
});
