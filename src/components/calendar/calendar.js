import 'air-datepicker';

class Calendar {
  constructor($calendar, index) {
    this.$calendar = $calendar;

    this.findDomElements();
    this.init();
    this.addEventListeners(index);
  }

  findDomElements() {
    this.$container = this.$calendar.find('.calendar__container');
    this.$fieldInit = this.$calendar.find('.calendar__field[data-field-type=init]');
    this.$fieldFrom = this.$calendar.find('.calendar__field[data-field-type=from]');
    this.$fieldTo = this.$calendar.find('.calendar__field[data-field-type=to]');
    this.$applyButton = this.$calendar.find('.calendar__button[data-button-type=apply]');
    this.$clearButton = this.$calendar.find('.calendar__button[data-button-type=clear]');
  }

  init() {
    this.$fieldInit.datepicker({
      prevHtml:
        '<svg style="width: 24px; height: 24px;" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Предыдущий месяц"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center; fill: #BC9CFF; stroke: none" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
      nextHtml:
        '<svg style="width: 24px; height: 24px;" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Следующий месяц"><path style="transform:translate(15%,15%); fill: #BC9CFF; stroke: none" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
      navTitles: {
        days: 'MM yyyy',
      },
      minDate: new Date(),
      offset: 9,
      range: true,
      multipleDatesSeparator: '-',
      inline: true,
      onSelect: this.handleCalendarSelectedData.bind(this),
    });

    this.$calendarData = this.$fieldInit.data('datepicker');
  }

  addEventListeners(index) {
    const namespace = `calendar.calendar-${index}`;

    this.$fieldFrom.on(`click.${namespace}`, this.toggleCalendar.bind(this));
    this.$applyButton.on(`click.${namespace}`, this.toggleCalendar.bind(this));
    this.$clearButton.on(`click.${namespace}`, this.handleClearButtonClick.bind(this));
  }

  toggleCalendar() {
    this.$container.toggleClass('calendar__container_hidden');
  }

  handleClearButtonClick() {
    this.$calendarData.clear();
  }

  handleCalendarSelectedData(formattedDate) {
    const arrDates = formattedDate.split('-');

    this.$fieldFrom.val(arrDates[0]);
    this.$fieldTo.val(arrDates[1]);
  }
}

export default Calendar;
