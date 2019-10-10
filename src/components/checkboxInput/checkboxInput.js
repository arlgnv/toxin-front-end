export default class CheckboxExpandable {
  constructor(checkbox) {
    this.findDOMElements(checkbox);
    this.addEventListeners();
  }

  findDOMElements(checkbox) {
    this.checkbox = checkbox;
    this.titleCheckbox = this.checkbox.querySelector('.checkbox-input__group-title');
  }

  addEventListeners() {
    this.titleCheckbox.addEventListener('click', this.toggleCheckbox.bind(this));
  }

  toggleCheckbox() {
    this.checkbox.classList.toggle('checkbox-input_expanded');
  }
}
