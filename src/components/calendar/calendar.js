import 'air-datepicker';
import DEFAULT_CALENDAR_PARAMETRS from './constants';

class Calendar {
  constructor($calendar, index) {
    this.$calendar = $calendar;

    this.init(index);
  }

  init(index) {
    this.findDomElements();
    this.addEventListeners(index);

    this.$fieldInit.datepicker({
      ...DEFAULT_CALENDAR_PARAMETRS,
      onSelect: this.handleCalendarSelectedData.bind(this),
    });

    this.$calendarData = this.$fieldInit.data('datepicker');
  }

  findDomElements() {
    this.$container = this.$calendar.find('.js-calendar__container');
    this.$tick = this.$calendar.find('.js-calendar__tick');
    this.$fieldInit = this.$calendar.find('.js-calendar__field_type_init');
    this.$fieldFrom = this.$calendar.find('.js-calendar__field_type_from');
    this.$fieldTo = this.$calendar.find('.js-calendar__field_type_to');
    this.$applyButton = this.$calendar.find('.js-calendar__button_type_apply');
    this.$clearButton = this.$calendar.find('.js-calendar__button_type_clear');
  }

  addEventListeners(index) {
    const namespace = `calendar.calendar-${index}`;

    this.$tick.on(`click.${namespace}`, this.handleTickClick.bind(this));
    this.$applyButton.on(`click.${namespace}`, this.handleApplyButtonClick.bind(this));
    this.$clearButton.on(`click.${namespace}`, this.handleClearButtonClick.bind(this));
  }

  handleTickClick() {
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
