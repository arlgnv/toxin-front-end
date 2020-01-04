class DropdownGuests {
  constructor(dropdown) {
    this.dropdown = dropdown;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.dropdown__input');
    this.counterFields = this.dropdown.querySelectorAll('.dropdown__counter-value');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=decrease]');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=increase]');
    this.buttonClear = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=clear]');
    this.buttonApply = this.dropdown.querySelector('.dropdown__button[data-dropdown-button-type=apply]');
  }

  addEventListeners() {
    this.input.addEventListener('click', this.handleInputClick.bind(this));
    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.handleDecreaseButtonClick.bind(this)));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.handleIncreaseButtonClick.bind(this)));
    this.buttonClear.addEventListener('click', this.handleButtonClearClick.bind(this));
    this.buttonApply.addEventListener('click', this.handleButtonApplyClick.bind(this));
  }

  handleInputClick() {
    this.dropdown.classList.toggle('dropdown_expanded');
  }

  handleDecreaseButtonClick(evt) {
    const counterField = evt.currentTarget.nextElementSibling;
    const buttonDecrease = evt.currentTarget;

    if (counterField.textContent > 0) {
      counterField.textContent -= 1;

      if (Number(counterField.textContent) === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
        if (this.isCounterFieldsEmpty()) this.buttonClear.classList.add('dropdown__button_hidden');
      }
    }
  }

  handleIncreaseButtonClick(evt) {
    const counterField = evt.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = Number(counterField.textContent) + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');

    this.buttonClear.classList.remove('dropdown__button_hidden');
  }

  handleButtonClearClick(evt) {
    evt.preventDefault();

    evt.currentTarget.classList.add('dropdown__button_hidden');
    this.input.value = '';
    this.buttonsDecrease.forEach((button) => button.classList.add('dropdown__control-button_disabled'));
    this.counterFields.forEach((counterField) => (counterField.textContent = 0));
  }

  handleButtonApplyClick() {
    const counters = [
      { guest: 'гостей', baby: 'младенцев' },
      { guest: 'гость', baby: 'младенец' },
      { guest: 'гостя', baby: 'младенца' },
      { guest: 'гостя', baby: 'младенца' },
      { guest: 'гостя', baby: 'младенца' },
      { guest: 'гостей', baby: 'младенцев' },
    ];

    const guestsAmount = this.counterFields.reduce((acc, it) => Number(it.textContent) + acc, 0);
    const amountBabies = this.counterFields[2].textContent;

    this.input.value = counters.reduce((acc, it, i) => {
      const babies = amountBabies >= i ? it.baby : counters[amountBabies].baby;

      return guestsAmount >= i
        ? `${guestsAmount} ${it.guest}, ${amountBabies} ${babies}`
        : acc;
    }, '');

    this.dropdown.classList.remove('dropdown_expanded');
  }

  isCounterFieldsEmpty() {
    return this.counterFields.every((field) => field.textContent <= 0);
  }
}

export default DropdownGuests;
