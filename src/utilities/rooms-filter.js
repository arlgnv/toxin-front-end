/* global document */

class RoomsFilter {
  constructor(filter) {
    this.filter = filter;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.filterForm = this.filter.querySelector('.filter__form');
    this.filterShow = this.filter.querySelector('.filter__show-button');
    this.filterClose = this.filter.querySelector('.filter__close-button');
  }

  addEventListeners() {
    this.filterShow.addEventListener('click.filter', this.showFilter.bind(this));
    this.filterClose.addEventListener('click.filter', this.closeFilter.bind(this));
  }

  showFilter(evt) {
    evt.preventDefault();

    this.filterForm.classList.add('filter__form_showed');
    this.filterClose.classList.remove('filter__close-button_hidden');
    this.filterClose.style.left = `${document.documentElement.clientWidth - this.filterClose.offsetWidth}px`;

    document.body.classList.add('scroll-none');
  }

  closeFilter(evt) {
    evt.preventDefault();

    this.filterForm.classList.remove('filter__form_showed');
    this.filterClose.classList.add('filter__close-button_hidden');

    document.body.classList.remove('scroll-none');
  }
}

export default RoomsFilter;
