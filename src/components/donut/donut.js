import '../../utilities/jquery.rotapie';

class Donut {
  constructor($donut) {
    this.$donut = $donut;

    this.init();
  }

  init() {
    this.findDomElements();

    const that = this;
    const data = this.$items.map((i, el) => ({
      color: $(el).attr('data-color'),
      amount: Number($(el).attr('data-amount')),
      unit: that.getWordForm(Number($(el).attr('data-amount'))),
    }));


    this.$donut.rotapie({ slices: data });
  }

  findDomElements() {
    this.$items = this.$donut.find('.js-donut__item');
  }

  getWordForm(num, words = ['голос', 'голоса', 'голосов']) {
    const correctedNum = Math.abs(num % 100) > 20 ? num % 10 : num;

    return words[(correctedNum > 4 || correctedNum === 0) + (correctedNum !== 1)];
  }
}

export default Donut;
