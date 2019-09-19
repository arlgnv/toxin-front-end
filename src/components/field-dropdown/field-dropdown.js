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
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Дети</b>
            <span class="dropdown__count">
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Младенцы</b>
            <span class="dropdown__count">
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount dropdown__amount_baby">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item dropdown__item_shift-from-top_20">
            <button class="dropdown__control-button dropdown__control-button_type_clear dropdown__control-button_disabled" type="button">Очистить</button>
            <button class="dropdown__control-button dropdown__control-button_type_apply" type="button">Применить</button>
        </span>
    </span>`);

  const dropdown = document.body.querySelector('.dropdown');
  const dropdownItems = dropdown.querySelectorAll('.dropdown__item:not(:last-child)');
  const dropdownAmounts = dropdown.querySelectorAll('.dropdown__amount');

  dropdownItems.forEach((item) => {
    const buttonDel = item.querySelector('.dropdown__button_type_delete');
    buttonDel.addEventListener('click', subtractOne);

    const buttonAdd = item.querySelector('.dropdown__button_type_add');
    buttonAdd.addEventListener('click', addOne);
  });

  const buttonClear = dropdown.querySelector('.dropdown__control-button_type_clear');
  buttonClear.addEventListener('click', clearChanges);

  const buttonApply = dropdown.querySelector('.dropdown__control-button_type_apply');
  buttonApply.addEventListener('click', applyChanges);

  function subtractOne({ target }) {
    const amountField = target.nextElementSibling;

    if (+amountField.textContent > 0) {
      amountField.textContent = +amountField.textContent - 1;

      if (+amountField.textContent === 0) {
        target.classList.add('dropdown__button_disabled');
        if (checkIsFieldsEmpty() === true) buttonClear.classList.add('dropdown__control-button_disabled');
      }
    }
  }

  function addOne({ target }) {
    const amountField = target.previousElementSibling;
    amountField.textContent = +amountField.textContent + 1;

    const buttonDel = amountField.previousElementSibling;
    buttonDel.classList.remove('dropdown__button_disabled');

    buttonClear.classList.remove('dropdown__control-button_disabled');
  }

  function clearChanges({ target }) {
    const buttonsDel = dropdown.querySelectorAll('.dropdown__button_type_delete');
    buttonsDel.forEach((button) => button.classList.add('dropdown__button_disabled'));

    dropdownAmounts.forEach((amountField) => amountField.textContent = 0);

    input.value = '';
    target.classList.add('dropdown__control-button_disabled');
  }

  function applyChanges() {
    let amountGuests = 0;
    let amountBabies = 0;

    dropdownItems.forEach((item) => {
      const title = item.querySelector('.dropdown__title').textContent;
      const amountText = +item.querySelector('.dropdown__amount').textContent;

      if (title === 'Младенцы') amountBabies += amountText;
      amountGuests += amountText;
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
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Кровати</b>
            <span class="dropdown__count">
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Ванные комнаты</b>
            <span class="dropdown__count">
                <button class="dropdown__button dropdown__button_type_delete dropdown__button_disabled" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__button dropdown__button_type_add" type="button"></button>
            </span>
        </span>
    </span>`);

  const dropdown = document.body.querySelector('.dropdown');
  const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

  dropdownItems.forEach((item) => {
    const buttonDel = item.querySelector('.dropdown__button_type_delete');
    buttonDel.addEventListener('click', subtractOne);

    const buttonAdd = item.querySelector('.dropdown__button_type_add');
    buttonAdd.addEventListener('click', addOne);
  });

  function subtractOne({ target }) {
    const amountField = target.nextElementSibling;

    if (+amountField.textContent > 0) {
      amountField.textContent = +amountField.textContent - 1;

      if (+amountField.textContent === 0) {
        target.classList.add('dropdown__button_disabled');
      }
    }

    applyChanges();
  }

  function addOne({ target }) {
    const amount = target.previousElementSibling;
    amount.textContent = +amount.textContent + 1;

    const buttonDel = amount.previousElementSibling;
    buttonDel.classList.remove('dropdown__button_disabled');

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

        default: break;
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
