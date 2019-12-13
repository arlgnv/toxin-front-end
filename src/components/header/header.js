export default class Header {
  constructor(header) {
    this.header = header;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.headerNavigation = this.header.querySelector('.header__navigation');
    this.headerButtonBurger = this.header.querySelector('.header__burger');
  }

  addEventListeners() {
    this.headerButtonBurger.addEventListener('click.header', this.toggleHeader.bind(this));
  }

  toggleHeader(evt) {
    evt.preventDefault();

    this.headerButtonBurger.classList.toggle('header__burger_theme_cross');
    this.headerNavigation.classList.toggle('header__navigation_opened');
  }
}
