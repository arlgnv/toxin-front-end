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
    this.items = this.dropdown.querySelectorAll('.dropdown__item:not(:last-child)');
    this.amounts = this.dropdown.querySelectorAll('.dropdown__amount');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button_theme_minus');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button_theme_plus');
    this.buttonClear = this.dropdown.querySelector('.dropdown__button_theme_clear');
    this.buttonApply = this.dropdown.querySelector('.dropdown__button_theme_apply');

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
    const item = evt.currentTarget.parentElement;
    const buttonDecrease = item.querySelector('.dropdown__control-button_theme_minus');
    const amount = item.querySelector('.dropdown__amount');

    if (+amount.textContent > 0) {
      amount.textContent = +amount.textContent - 1;

      if (+amount.textContent === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
        if (this.checkIsFieldsEmpty() === true) this.buttonClear.classList.add('dropdown__button_disabled');
      }
    }
  }

  increaseValue(evt) {
    const item = evt.currentTarget.parentElement;
    const buttonDecrease = item.querySelector('.dropdown__control-button_theme_minus');
    const amount = item.querySelector('.dropdown__amount');

    amount.textContent = +amount.textContent + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');

    this.buttonClear.classList.remove('dropdown__button_disabled');
  }

  reset() {
    this.buttonsDecrease.forEach((button) => button.classList.add('dropdown__control-button_disabled'));

    this.amounts.forEach((amount) => amount.textContent = 0);

    this.input.value = '';
    this.buttonClear.classList.add('dropdown__button_disabled');
  }

  apply() {
    let amountGuests = 0;
    let amountBabies = 0;

    this.items.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amountText = +item.querySelector('.dropdown__amount').textContent;

      if (title === 'Младенцы') amountBabies += amountText;
      amountGuests += amountText;
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

    this.amounts.forEach((amount) => {
      if (amount.textContent > 0) flag = false;
    });

    return flag;
  }
}
