import Dropdown from './dropdown';

class DropdownComfort extends Dropdown {
  constructor(dropdown) {
    super(dropdown);
  }

  handleDecreaseButtonClick(evt) {
    super.handleDecreaseButtonClick(evt);

    this.apply();
  }

  handleIncreaseButtonClick(evt) {
    super.handleIncreaseButtonClick(evt);

    this.apply();
  }

  apply() {
    const counters = [
      { 0: ['спален', 'кроватей', 'ванных комнат'] },
      { 1: ['спальня', 'кровать', 'ванная комната'] },
      { 2: ['спальни', 'кровати', 'ванные комнаты'] },
      { 3: ['спальни', 'кровати', 'ванные комнаты'] },
      { 4: ['спальни', 'кровати', 'ванные комнаты'] },
      { 5: ['спален', 'кроватей', 'ванных комнат'] },
    ];

    this.input.value = this.groups.map((group, index) => {
      const value = group.querySelector('.dropdown__counter-value').textContent;

      return counters
        .map((counter) => Number(Object.keys(counter)[0]))
        .reduce((acc, quantity, i) => (value >= quantity ? ` ${value} ${counters[i][quantity][index]}` : acc), '');
    });

    this.input.value = this.input.value.trim();
  }
}

export default DropdownComfort;
