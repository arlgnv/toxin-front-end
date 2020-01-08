class RoomsFilter {
  constructor(filter) {
    this.filter = filter;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.filterForm = this.filter.querySelector('.js-rooms-page__form');
    this.filterShow = this.filter.querySelector('.js-rooms-page__filter-show-button');
    this.filterClose = this.filter.querySelector('.js-rooms-page__filter-close-button');
  }

  addEventListeners() {
    this.filterShow.addEventListener('click', this.handleShowButtonClick.bind(this));
    this.filterClose.addEventListener('click', this.handleCloseButtonClick.bind(this));
  }

  handleShowButtonClick(evt) {
    evt.preventDefault();

    this.filterForm.classList.add('rooms-page__form_showed');
    this.filterClose.classList.remove('rooms-page__filter-close-button_hidden');
    this.filterClose.style.left = `${document.documentElement.clientWidth - this.filterClose.offsetWidth}px`;

    document.body.classList.add('scroll-none');
  }

  handleCloseButtonClick(evt) {
    evt.preventDefault();

    this.filterForm.classList.remove('rooms-page__form_showed');
    this.filterClose.classList.add('rooms-page__filter-close-button_hidden');

    document.body.classList.remove('scroll-none');
  }
}

export default RoomsFilter;
