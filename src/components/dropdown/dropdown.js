class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.js-dropdown__input');
    this.counterFields = this.dropdown.querySelectorAll('.js-dropdown__counter-value');
    this.groups = this.dropdown.querySelectorAll('.js-dropdown__group');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.js-dropdown__control-button_type_decrease');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.js-dropdown__control-button_type_increase');
  }

  addEventListeners() {
    this.input.addEventListener('click', this.handleInputClick.bind(this));
    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.handleDecreaseButtonClick.bind(this)));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.handleIncreaseButtonClick.bind(this)));
  }

  handleInputClick() {
    this.dropdown.classList.toggle('dropdown_expanded');
  }

  handleDecreaseButtonClick(evt) {
    const buttonDecrease = evt.currentTarget;
    const counterField = buttonDecrease.nextElementSibling;

    if (counterField.textContent > 0) {
      counterField.textContent -= 1;

      if (Number(counterField.textContent) === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
      }
    }
  }

  handleIncreaseButtonClick(evt) {
    const counterField = evt.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = Number(counterField.textContent) + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');
  }
}

export default Dropdown;
