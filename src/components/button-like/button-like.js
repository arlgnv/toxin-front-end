import DEFAULT_NUMBER_LIKES from './constants';

class ButtonLike {
  constructor(button) {
    this.button = button;

    this.init();
  }

  init() {
    this.findDomElements();
    this.addEventListeners();

    const numberLikes = Number(this.button.getAttribute('data-amount-likes'));
    this.count = Number.isNaN(numberLikes) ? DEFAULT_NUMBER_LIKES : numberLikes;

    this.updateButton();
  }

  findDomElements() {
    this.buttonText = this.button.querySelector('.js-button-like__text');
  }

  addEventListeners() {
    this.button.addEventListener('click', this.handleButtonLikeClick.bind(this));
  }

  handleButtonLikeClick(evt) {
    evt.preventDefault();

    this.button.classList.toggle('button-like_theme_liked');
    this.count += this.button.classList.contains('button-like_theme_liked') ? 1 : -1;

    this.updateButton();
  }

  updateButton() {
    this.button.setAttribute('data-amount-likes', this.count);
    this.buttonText.textContent = this.count;
  }
}

export default ButtonLike;
