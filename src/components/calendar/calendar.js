import 'air-datepicker';

class Calendar {
  constructor($calendar, index) {
    this.$calendar = $calendar;

    this.init(index);
  }

  init(index) {
    this.findDomElements();

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

    this.addEventListeners(index);
  }

  findDomElements() {
    this.$container = this.$calendar.find('.js-calendar__container');
    this.$fieldInit = this.$calendar.find('.js-calendar__field_type_init');
    this.$fieldFrom = this.$calendar.find('.js-calendar__field_type_from');
    this.$fieldTo = this.$calendar.find('.js-calendar__field_type_to');
    this.$applyButton = this.$calendar.find('.js-calendar__button_type_apply');
    this.$clearButton = this.$calendar.find('.js-calendar__button_type_clear');
  }

  addEventListeners(index) {
    const namespace = `calendar.calendar-${index}`;

    this.$fieldFrom.on(`click.${namespace}`, this.handleFieldFromClick.bind(this));
    this.$applyButton.on(`click.${namespace}`, this.handleApplyButtonClick.bind(this));
    this.$clearButton.on(`click.${namespace}`, this.handleClearButtonClick.bind(this));
  }

  handleFieldFromClick() {
    this.toggleCalendar();
  }

  handleApplyButtonClick() {
    this.toggleCalendar();
  }

  handleClearButtonClick() {
    this.$calendarData.clear();
  }

  handleCalendarSelectedData(formattedDate) {
    const arrDates = formattedDate.split('-');

    this.$fieldFrom.val(arrDates[0]);
    this.$fieldTo.val(arrDates[1]);
  }

  toggleCalendar() {
    this.$container.toggleClass('calendar__container_hidden');
  }
}

export default Calendar;
