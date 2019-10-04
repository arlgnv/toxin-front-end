/* eslint-disable no-new */
/* global document $ */

import '../../utilities/jquery-global';

import Header from '../../components/header/header';
import Calendar from '../../components/calendar/calendar';
import DropdownGuests from '../../components/dropdown/dropdownGuests';

const header = document.querySelector('.js-header');
new Header(header);

const dropdownGuests = document.querySelector('.js-dropdown');
new DropdownGuests(dropdownGuests);

const calendarCheckIn = $('.js-dropdown-date-from');
const calendarCheckOut = $('.js-dropdown-date-to');
new Calendar(calendarCheckIn, calendarCheckOut);
