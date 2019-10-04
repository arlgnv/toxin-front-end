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
    this.groups = this.dropdown.querySelectorAll('.dropdown__group:not(:last-child)');
    this.counters = this.dropdown.querySelectorAll('.dropdown__counter');
    this.counterFields = this.dropdown.querySelectorAll('.dropdown__counter-value');
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
    let amountGuests = 0;
    let amountBabies = 0;

    this.groups.forEach((group) => {
      const title = group.querySelector('.dropdown__title').textContent;
      const value = +group.querySelector('.dropdown__counter-value').textContent;

      if (title === 'Младенцы') amountBabies += value;
      amountGuests += value;
    });

    switch (amountGuests) {
      case 1:
        this.input.value = `${amountGuests} гость, `;
        break;

      case 2:
      case 3:
      case 4:
        this.input.value = `${amountGuests} гостя, `;
        break;

      default:
        this.input.value = `${amountGuests} гостей, `;
    }

    switch (amountBabies) {
      case 1:
        this.input.value += `${amountBabies} младенец`;
        break;

      case 2:
      case 3:
      case 4:
        this.input.value += `${amountBabies} младенца`;
        break;

      default:
        this.input.value += `${amountBabies} младенцев`;
    }

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
