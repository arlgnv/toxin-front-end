/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* global $ */
import '../../utilities/jquery.rotapie';

class Donut {
  constructor(donut) {
    this.donut = donut;

    this.init();
  }

  init() {
    const that = this;
    const data = [];
    this.donut.find('.donut__item').each(function () {
      data.push({
        color: $(this).attr('data-color'),
        amount: Number($(this).attr('data-amount')),
        unit: that.getWordForm(Number($(this).attr('data-amount'))),
      });
    });

    this.donut.rotapie({ slices: data });
  }

  getWordForm(num, words = ['голос', 'голоса', 'голосов']) {
    const correctedNum = Math.abs(num % 100) > 20 ? num % 10 : num;

    return words[(correctedNum > 4 || correctedNum === 0) + (correctedNum !== 1)];
  }
}

export default Donut;
