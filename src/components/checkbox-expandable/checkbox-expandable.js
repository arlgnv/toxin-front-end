class CheckboxExpandable {
  constructor(checkbox) {
    this.checkbox = checkbox;

    this.findDOMElements();
    this.addEventListeners();
  }

  findDOMElements() {
    this.checkboxTitle = this.checkbox.querySelector('.checkbox-expandable__title');
  }

  addEventListeners() {
    this.checkboxTitle.addEventListener('click', this.toggleCheckbox.bind(this));
  }

  toggleCheckbox() {
    this.checkbox.classList.toggle('checkbox-expandable_expanded');
  }
}

export default CheckboxExpandable;
