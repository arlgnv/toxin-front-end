/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* global window NodeList */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

export default class DropdownComfort {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.input = this.dropdown.querySelector('.dropdown__field');
    this.items = this.dropdown.querySelectorAll('.dropdown__item');
    this.amounts = this.dropdown.querySelectorAll('.dropdown__amount');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button_theme_minus');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button_theme_plus');

    this.addEventListeners();
  }

  addEventListeners() {
    this.input.addEventListener('click', this.toggleDropdown.bind(this));

    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.decreaseValue.bind(this)));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.increaseValue.bind(this)));
  }

  toggleDropdown() {
    this.dropdown.classList.toggle('dropdown_expanded');
  }

  decreaseValue(evt) {
    const item = evt.currentTarget.parentElement;
    const buttonDecrease = item.querySelector('.dropdown__control-button_theme_minus');
    const amount = item.querySelector('.dropdown__amount');

    if (amount.textContent > 0) {
      amount.textContent -= 1;

      if (amount.textContent === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
      }
    }

    this.apply();
  }

  increaseValue(evt) {
    const item = evt.currentTarget.parentElement;
    const buttonDecrease = item.querySelector('.dropdown__control-button_theme_minus');
    const amount = item.querySelector('.dropdown__amount');

    amount.textContent = +amount.textContent + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');

    this.apply();
  }

  apply() {
    const cases = {
      0: ['спален', 'кроватей', 'ванных комнат'],
      1: ['спальня', 'кровать', 'ванная комната'],
      2: ['спальни', 'кровати', 'ванные комнаты'],
      3: ['спальни', 'кровати', 'ванные комнаты'],
      4: ['спальни', 'кровати', 'ванные комнаты'],
      5: ['спален', 'кроватей', 'ванных комнат'],
      6: ['спален', 'кроватей', 'ванных комнат'],
      7: ['спален', 'кроватей', 'ванных комнат'],
      8: ['спален', 'кроватей', 'ванных комнат'],
      9: ['спален', 'кроватей', 'ванных комнат'],
      10: ['спален', 'кроватей', 'ванных комнат'],
    };

    this.items.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amount = item.querySelector('.dropdown__amount').textContent;

      switch (title) {
        case 'Спальни':
          this.input.value = `${amount} ${cases[amount][0]}, `;
          break;

        case 'Кровати':
          this.input.value += `${amount} ${cases[amount][1]}, `;
          break;

        case 'Ванные комнаты':
          this.input.value += `${amount} ${cases[amount][2]}`;
          break;

        default: break;
      }
    });
  }
}
