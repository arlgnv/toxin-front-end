/* global $ */
const $from = $('.js-date-from');
const $to = $('.js-date-to');

$from.datepicker({
  clearButton: true,
  todayButton: true,
  language: {
    today: 'Применить',
  },
  prevHtml:
        '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
  nextHtml:
        '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(15%,15%)" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
  navTitles: {
    days: 'MM yyyy',
  },
  minDate: new Date(),
  offset: 9,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    const arrDates = fd.split('-');

    if (arrDates.length === 1) {
      $from.val(arrDates[0]);
    } else {
      $from.val(arrDates[0]);
      $to.val(arrDates[1]);
    }
  },
});

const myDatepicker = $from.data('datepicker');
$('.datepicker--button[data-action=today]').click(() => myDatepicker.hide());
