class Header {
  constructor(header) {
    this.header = header;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.headerNavigation = this.header.querySelector('.js-header__navigation');
    this.headerBurgerButton = this.header.querySelector('.js-header__burger-button');
  }

  addEventListeners() {
    this.headerBurgerButton.addEventListener('click', this.handleBurgerButtonClick.bind(this));
  }

  handleBurgerButtonClick(evt) {
    evt.preventDefault();

    this.headerBurgerButton.classList.toggle('header__burger-button_theme_cross');
    this.headerNavigation.classList.toggle('header__navigation_opened');
  }
}

export default Header;
