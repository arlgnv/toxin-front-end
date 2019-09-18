/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* global document window NodeList */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function initGuestsDropdown(evt) {
  const input = evt.target;
  input.removeEventListener('click', initGuestsDropdown);
  input.addEventListener('click', () => dropdown.classList.toggle('dropdown_hidden'));

  input.insertAdjacentHTML('afterend', `
    <span class="dropdown">
        <span class="dropdown__item">
            <b class="dropdown__title">Взрослые</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Дети</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Младенцы</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount dropdown__amount_baby">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item dropdown__buttons">
            <span class="dropdown__clear">Очистить</span>
            <span class="dropdown__apply">Применить</span>
        </span>
    </span>`);

  const dropdown = document.body.querySelector('.dropdown');

  const dropdownItems = dropdown.querySelectorAll('.dropdown__item:not(.dropdown__buttons)');

  dropdownItems.forEach((item) => {
    const delButton = item.querySelector('.dropdown__del');
    delButton.addEventListener('click', subtractOne);

    const addButton = item.querySelector('.dropdown__add');
    addButton.addEventListener('click', addOne);
  });

  const dropdownClear = dropdown.querySelector('.dropdown__clear');
  dropdownClear.addEventListener('click', clearInput);

  const dropdownApply = dropdown.querySelector('.dropdown__apply');
  dropdownApply.addEventListener('click', applyChanges);

  function subtractOne({ target }) {
    const amount = target.nextElementSibling;

    if (+amount.textContent === 0) return;

    amount.textContent -= 1;

    if (+amount.textContent === 0) {
      target.style.opacity = '';

      if (checkIsFieldsEmpty()) dropdownClear.style = '';
    }
  }

  function addOne({ target }) {
    const amount = target.previousElementSibling;
    amount.textContent = +amount.textContent + 1;

    const delButton = amount.previousElementSibling;
    delButton.style.opacity = '1';

    dropdownClear.style.display = 'block';
  }

  function clearInput({ target }) {
    const amounts = dropdown.querySelectorAll('.dropdown__amount');
    const delButtons = dropdown.querySelectorAll('.dropdown__del');

    amounts.forEach((item) => item.textContent = 0);
    delButtons.forEach((item) => item.style.opacity = '');

    input.value = '';
    target.cssText = '';
  }

  function applyChanges() {
    let amountGuests = 0;
    let amountBabies = 0;

    dropdownItems.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amount = +item.querySelector('.dropdown__amount').textContent;

      if (title === 'Младенцы') amountBabies += amount;
      amountGuests += amount;
    });

    switch (amountGuests) {
      case 1:
        input.value = `${amountGuests} гость, `;
        break;

      case 2:
      case 3:
      case 4:
        input.value = `${amountGuests} гостя, `;
        break;

      default:
        input.value = `${amountGuests} гостей, `;
    }

    switch (amountBabies) {
      case 1:
        input.value += `${amountBabies} младенец`;
        break;

      case 2:
      case 3:
      case 4:
        input.value += `${amountBabies} младенца`;
        break;

      default:
        input.value += `${amountBabies} младенцев`;
    }

    dropdown.classList.add('dropdown_hidden');
  }

  function checkIsFieldsEmpty() {
    const amounts = dropdown.querySelectorAll('.dropdown__amount');
    let flag = true;

    amounts.forEach((item) => {
      if (item.textContent > 0) flag = false;
    });

    return flag;
  }
}

function initComfortDropdown(evt) {
  const input = evt.target;
  input.removeEventListener('click', initComfortDropdown);
  input.addEventListener('click', () => dropdown.classList.toggle('dropdown_hidden'));

  input.insertAdjacentHTML('afterend', `
    <span class="dropdown">
        <span class="dropdown__item">
            <b class="dropdown__title">Спальни</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Кровати</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Ванные комнаты</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
    </span>`);

  const dropdown = document.body.querySelector('.dropdown');

  const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

  dropdownItems.forEach((item) => {
    const delButton = item.querySelector('.dropdown__del');
    delButton.addEventListener('click', subtractOne);

    const addButton = item.querySelector('.dropdown__add');
    addButton.addEventListener('click', addOne);
  });

  function subtractOne({ target }) {
    const amount = target.nextElementSibling;

    if (+amount.textContent === 0) return;

    amount.textContent -= 1;

    if (+amount.textContent === 0) target.style = '';

    applyChanges();
  }

  function addOne({ target }) {
    const amount = target.previousElementSibling;
    amount.textContent = +amount.textContent + 1;

    const delButton = amount.previousElementSibling;
    delButton.style.opacity = '1';

    applyChanges();
  }

  function applyChanges() {
    let amountBedrooms = 0;
    let amountBeds = 0;
    let amountBathrooms = 0;

    dropdownItems.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amount = +item.querySelector('.dropdown__amount').textContent;

      switch (title) {
        case 'Спальни':
          amountBedrooms += amount;
          break;

        case 'Кровати':
          amountBeds += amount;
          break;

        case 'Ванные комнаты':
          amountBathrooms += amount;
          break;

        default:
      }
    });

    switch (amountBedrooms) {
      case 1:
        input.value = `${amountBedrooms} спальня, `;
        break;

      case 2:
      case 3:
      case 4:
        input.value = `${amountBedrooms} спальни, `;
        break;

      default:
        input.value = `${amountBedrooms} спален, `;
    }

    switch (amountBeds) {
      case 1:
        input.value += `${amountBeds} кровать, `;
        break;

      case 2:
      case 3:
      case 4:
        input.value += `${amountBeds} кровати, `;
        break;

      default:
        input.value += `${amountBeds} кроватей, `;
    }

    switch (amountBathrooms) {
      case 1:
        input.value += `${amountBathrooms} ванная комната`;
        break;

      case 2:
      case 3:
      case 4:
        input.value += `${amountBathrooms} ванные комнаты`;
        break;

      default:
        input.value += `${amountBathrooms} ванных комнат`;
    }
  }
}

export { initGuestsDropdown, initComfortDropdown };
