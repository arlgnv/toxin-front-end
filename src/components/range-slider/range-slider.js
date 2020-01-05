import 'ion-rangeslider';

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
      skin: 'custom',
      type: 'double',
      min: 0,
      max: 15000,
      hide_min_max: true,
      from: 5000,
      to: 10000,
      hide_from_to: true,
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
