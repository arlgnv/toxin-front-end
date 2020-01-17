import 'ion-rangeslider';
import DEFAULT_RANGE_SLIDER_PARAMETERS from './constants';

class RangeSlider {
  constructor($slider) {
    this.$slider = $slider;

    this.init();
  }

  findDomElements() {
    this.$sliderField = this.$slider.find('.js-range-slider__field');
    this.$sliderPrice = this.$slider.find('.js-range-slider__price');
  }

  init() {
    this.findDomElements();

    this.$sliderField.ionRangeSlider({
      ...DEFAULT_RANGE_SLIDER_PARAMETERS,
      onStart: this.handleSliderStart.bind(this),
      onChange: this.handleRunnerDrag.bind(this),
    });
  }

  handleSliderStart(value) {
    this.changePrice(value);
  }

  handleRunnerDrag(value) {
    this.changePrice(value);
  }

  changePrice(value) {
    this.$sliderPrice.html(`${value.from}₽ - ${value.to}₽`);
  }
}

export default RangeSlider;
