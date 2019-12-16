class ButtonLike {
  constructor(button) {
    this.button = button;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.buttonText = this.button.querySelector('.button-like__text');
  }

  addEventListeners() {
    this.button.addEventListener('click', this.toggleLike.bind(this));
  }

  toggleLike(evt) {
    evt.preventDefault();

    this.button.classList.toggle('button-like_theme_liked');

    this.buttonText.textContent = this.button.classList.contains('button-like_theme_liked')
      ? Number(this.buttonText.textContent) + 1
      : Number(this.buttonText.textContent) - 1;
  }
}

export default ButtonLike;
