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

    if (+amount.textContent > 0) {
      amount.textContent = +amount.textContent - 1;

      if (+amount.textContent === 0) {
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
    let amountBedrooms = 0;
    let amountBeds = 0;
    let amountBathrooms = 0;

    this.items.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amount = +item.querySelector('.dropdown__amount').textContent;

      switch (title) {
        case 'Спальни':
          amountBedrooms += amount;
          break;

        case 'Кровати':
          amountBeds += amount;
          break;

        case 'Ванные комнаты':
          amountBathrooms += amount;
          break;

        default: break;
      }
    });

    switch (amountBedrooms) {
      case 1:
        this.input.value = `${amountBedrooms} спальня, `;
        break;

      case 2:
      case 3:
      case 4:
        this.input.value = `${amountBedrooms} спальни, `;
        break;

      default:
        this.input.value = `${amountBedrooms} спален, `;
    }

    switch (amountBeds) {
      case 1:
        this.input.value += `${amountBeds} кровать, `;
        break;

      case 2:
      case 3:
      case 4:
        this.input.value += `${amountBeds} кровати, `;
        break;

      default:
        this.input.value += `${amountBeds} кроватей, `;
    }

    switch (amountBathrooms) {
      case 1:
        this.input.value += `${amountBathrooms} ванная комната`;
        break;

      case 2:
      case 3:
      case 4:
        this.input.value += `${amountBathrooms} ванные комнаты`;
        break;

      default:
        this.input.value += `${amountBathrooms} ванных комнат`;
    }
  }
}
