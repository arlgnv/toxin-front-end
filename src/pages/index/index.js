import '../../utilities/jquery-global';
import '../../utilities/polyfills';
import Header from '../../components/header/header';
import Calendar from '../../components/calendar/calendar';
import DropdownGuests from '../../components/dropdown/dropdown-guests';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const dropdownsGuests = document.querySelectorAll('.js-dropdown');
dropdownsGuests.forEach((dropdown) => new DropdownGuests(dropdown));

const $calendars = $('.js-calendar');
$calendars.each(function (i) {
  new Calendar($(this), i);
});
