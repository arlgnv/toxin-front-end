/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

export default class DropdownGuests {
  constructor(dropdown) {
    this.dropdown = dropdown;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.dropdown__field');
    this.counterFields = this.dropdown.querySelectorAll('.dropdown__counter-value');
    this.buttonsDecrease = this.dropdown.querySelectorAll(
      '.dropdown__control-button[data-dropdown-button-type=decrease]'
    );
    this.buttonsIncrease = this.dropdown.querySelectorAll(
      '.dropdown__control-button[data-dropdown-button-type=increase]'
    );
    this.buttonClear = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=clear]');
    this.buttonApply = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=apply]');
  }

  addEventListeners() {
    this.input.addEventListener('click.dropdown', this.toggleDropdown.bind(this));
    this.buttonsDecrease.forEach(button => button.addEventListener('click.dropdown', this.decreaseValue.bind(this)));
    this.buttonsIncrease.forEach(button => button.addEventListener('click.dropdown', this.increaseValue.bind(this)));
    this.buttonClear.addEventListener('click.dropdown', this.reset.bind(this));
    this.buttonApply.addEventListener('click.dropdown', this.apply.bind(this));
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
        if (this.isCounterFieldsEmpty()) this.buttonClear.classList.add('dropdown__button_hidden');
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

  reset(evt) {
    evt.preventDefault();

    evt.currentTarget.classList.add('dropdown__button_hidden');
    this.input.value = '';
    this.buttonsDecrease.forEach(button => button.classList.add('dropdown__control-button_disabled'));
    this.counterFields.forEach(counterField => (counterField.textContent = 0));
  }

  apply() {
    const counters = [
      { guest: 'гостей', baby: 'младенцев' },
      { guest: 'гость', baby: 'младенец' },
      { guest: 'гостя', baby: 'младенеца' },
      { guest: 'гостя', baby: 'младенеца' },
      { guest: 'гостя', baby: 'младенеца' },
      { guest: 'гостей', baby: 'младенцев' },
    ];

    const guestsAmount = this.counterFields.reduce((acc, it) => +it.textContent + acc, 0);
    const amountBabies = this.counterFields[2].textContent;

    this.input.value = counters.reduce(
      (acc, it, i) =>
        guestsAmount >= i
          ? `${guestsAmount} ${it.guest}, ${amountBabies} ${amountBabies >= i ? it.baby : counters[amountBabies].baby}`
          : acc,
      ''
    );

    this.dropdown.classList.remove('dropdown_expanded');
  }

  isCounterFieldsEmpty() {
    return this.counterFields.every(field => field.textContent <= 0);
  }
}
