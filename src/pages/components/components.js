/* global document */
import '../../utilities/jquery-global';
import 'ion-rangeslider';
import 'air-datepicker';
import '../../components/main-header/main-header';
import '../../components/checkboxes/checkbox-expandable/checkbox-expandable';
import '../../components/calendar/calendar';
import { initGuestsDropdown, initComfortDropdown } from '../../components/field-dropdown/field-dropdown';

// Dropdowns
const inputDropdownGuests = document.querySelectorAll('#c-field-dropdown-guests');
inputDropdownGuests.addEventListener('click', initGuestsDropdown);

const inputDropdownComfort = document.querySelectorAll('#c-field-dropdown-comfort');
inputDropdownComfort.addEventListener('click', initComfortDropdown);
