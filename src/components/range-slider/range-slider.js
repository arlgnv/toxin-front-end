export default class RangeSlider {
  constructor(slider) {
    this.slider = slider;

    this.findDomElements();
    this.init();
  }

  findDomElements() {
    this.sliderField = this.slider.find('.range-slider__field');
    this.sliderPrice = this.slider.find('.range-slider__price');
  }

  init() {
    this.sliderField.ionRangeSlider({
      skin: 'custom',
      type: 'double',
      min: 0,
      max: 15000,
      hide_min_max: true,
      from: 5000,
      to: 10000,
      hide_from_to: true,
      onStart: this.onStart.bind(this),
      onChange: this.onChange.bind(this),
    });
  }

  onStart(value) {
    this.sliderPrice.html(`${value.from}₽ - ${value.to}₽`);
  }

  onChange(value) {
    this.sliderPrice.html(`${value.from}₽ - ${value.to}₽`);
  }
}
