/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* global window NodeList */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

export default class DropdownGuests {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.input = this.dropdown.querySelector('.dropdown__field');
    this.groups = Array.from(this.dropdown.querySelectorAll('.dropdown__group:not(:last-child)'));
    this.counters = Array.from(this.dropdown.querySelectorAll('.dropdown__counter'));
    this.counterFields = Array.from(this.dropdown.querySelectorAll('.dropdown__counter-value'));
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=decrease]');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=increase]');
    this.buttonClear = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=clear]');
    this.buttonApply = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=apply]');

    this.addEventListeners();
  }

  addEventListeners() {
    this.input.addEventListener('click', this.toggleDropdown.bind(this));

    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.decreaseValue.bind(this)));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.increaseValue.bind(this)));

    this.buttonClear.addEventListener('click', this.reset.bind(this));
    this.buttonApply.addEventListener('click', this.apply.bind(this));
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
        if (this.checkIsFieldsEmpty() === true) this.buttonClear.classList.add('dropdown__button_hidden');
      }
    }
  }

  increaseValue(evt) {
    const counterField = evt.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = +counterField.textContent + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');

    this.buttonClear.classList.remove('dropdown__button_hidden');
  }

  reset() {
    this.buttonsDecrease.forEach((button) => button.classList.add('dropdown__control-button_disabled'));

    this.counterFields.forEach((counterField) => counterField.textContent = 0);

    this.input.value = '';
    this.buttonClear.classList.add('dropdown__button_hidden');
  }

  apply() {
    const countersGuests = ['гостей', 'гость', 'гостя', 'гостя', 'гостя'];
    const countersBabies = ['младенцев', 'младенец', 'младенца', 'младенца', 'младенца'];

    let guestsAmount = this.counterFields.reduce((acc, field) => +field.textContent + acc, 0);
    guestsAmount += ` ${countersGuests[guestsAmount] || 'гостей'}, `;

    let amountBabies = this.counterFields[2].textContent;
    amountBabies += ` ${countersBabies[this.counterFields[2].textContent] || 'младенцев'}`;

    this.input.value = guestsAmount + amountBabies;

    this.dropdown.classList.remove('dropdown_expanded');
  }

  checkIsFieldsEmpty() {
    let flag = true;

    this.counters.forEach((counter) => {
      if (counter.textContent > 0) flag = false;
    });

    return flag;
  }
}
