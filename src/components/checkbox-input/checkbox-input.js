class CheckboxExpandable {
  constructor(checkbox) {
    this.checkbox = checkbox;

    this.findDOMElements();
    this.addEventListeners();
  }

  findDOMElements() {
    this.titleCheckbox = this.checkbox.querySelector('.checkbox-input__group-title');
  }

  addEventListeners() {
    this.titleCheckbox.addEventListener('click', this.toggleCheckbox.bind(this));
  }

  toggleCheckbox() {
    this.checkbox.classList.toggle('checkbox-input_expanded');
  }
}

export default CheckboxExpandable;
