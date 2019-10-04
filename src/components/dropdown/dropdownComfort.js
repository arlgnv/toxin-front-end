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
    this.groups = this.dropdown.querySelectorAll('.dropdown__group');
    this.counters = this.dropdown.querySelectorAll('.dropdown__counter');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=decrease]');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=increase]');

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
    const counterField = evt.currentTarget.nextElementSibling;
    const buttonDecrease = evt.currentTarget;

    if (counterField.textContent > 0) {
      counterField.textContent -= 1;

      if (+counterField.textContent === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
      }
    }

    this.apply();
  }

  increaseValue(evt) {
    const counterField = evt.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = +counterField.textContent + 1;

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

    this.groups.forEach((group) => {
      const title = group.querySelector('.dropdown__title').textContent;
      const value = group.querySelector('.dropdown__counter-value').textContent;

      switch (title) {
        case 'Спальни':
          this.input.value = `${value} ${cases[value][0]}, `;
          break;

        case 'Кровати':
          this.input.value += `${value} ${cases[value][1]}, `;
          break;

        case 'Ванные комнаты':
          this.input.value += `${value} ${cases[value][2]}`;
          break;

        default: break;
      }
    });
  }
}
