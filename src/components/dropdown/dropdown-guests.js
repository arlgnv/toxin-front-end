import Dropdown from './dropdown';

class DropdownGuests extends Dropdown {
  constructor(dropdown) {
    super(dropdown);

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    super.findDomElements();

    this.buttonClear = this.dropdown.querySelector('.js-dropdown__button_type_clear');
    this.buttonApply = this.dropdown.querySelector('.js-dropdown__button_type_apply');
  }

  addEventListeners() {
    super.addEventListeners();

    this.buttonClear.addEventListener('click', this.handleButtonClearClick.bind(this));
    this.buttonApply.addEventListener('click', this.handleButtonApplyClick.bind(this));
  }

  handleDecreaseButtonClick(evt) {
    super.handleDecreaseButtonClick(evt);

    const counterField = evt.currentTarget.nextElementSibling;
    const isNeedToHideButtonClear = Number(counterField.textContent) === 0
      && this.isCounterFieldsEmpty();
    if (isNeedToHideButtonClear) {
      this.buttonClear.classList.add('dropdown__button_hidden');
    }
  }

  handleIncreaseButtonClick(evt) {
    super.handleIncreaseButtonClick(evt);

    this.buttonClear.classList.remove('dropdown__button_hidden');
  }

  handleButtonClearClick(evt) {
    evt.preventDefault();

    evt.currentTarget.classList.add('dropdown__button_hidden');
    this.input.value = '';
    this.buttonsDecrease.forEach((button) => button.classList.add('dropdown__control-button_disabled'));
    this.counterFields.forEach((counterField) => {
      const field = counterField;
      field.textContent = 0;
    });
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
