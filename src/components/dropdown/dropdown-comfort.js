export default class DropdownComfort {
  constructor(dropdown) {
    this.dropdown = dropdown;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.dropdown__field');
    this.groups = this.dropdown.querySelectorAll('.dropdown__group');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=decrease]');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=increase]');
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
    const counters = [
      { 0: ['спален', 'кроватей', 'ванных комнат'] },
      { 1: ['спальня', 'кровать', 'ванная комната'] },
      { 2: ['спальни', 'кровати', 'ванные комнаты'] },
      { 3: ['спальни', 'кровати', 'ванные комнаты'] },
      { 4: ['спальни', 'кровати', 'ванные комнаты'] },
      { 5: ['спален', 'кроватей', 'ванных комнат'] },
    ];

    this.input.value = this.groups.map((group, index) => {
      const value = group.querySelector('.dropdown__counter-value').textContent;

      return counters
        .map((counter) => Number(Object.keys(counter)[0]))
        .reduce((acc, quantity, i) => (value >= quantity ? ` ${value} ${counters[i][quantity][index]}` : acc), '');
    });

    this.input.value = this.input.value.trim();
  }
}
