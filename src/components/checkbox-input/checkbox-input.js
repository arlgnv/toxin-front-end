export default class CheckboxExpandable {
  constructor(checkbox) {
    this.checkbox = checkbox;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.titleCheckbox = this.checkbox.querySelector('.checkbox-input__group-title');
  }

  addEventListeners() {
    this.titleCheckbox.addEventListener('click', this.toggleCheckbox.bind(this));
  }

  toggleCheckbox() {
    this.checkbox.classList.toggle('checkbox-input_expanded');
  }
}
