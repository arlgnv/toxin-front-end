/* global document */
import '../../utilities/jquery-global';

import 'air-datepicker';
import '../../components/main-header/main-header';
import '../../components/calendar/calendar';
import { initGuestsDropdown } from '../../components/field-dropdown/field-dropdown';

// Dropdown
const inputDropdownGuests = document.querySelector('.js-dropdown-guests');
inputDropdownGuests.addEventListener('click', initGuestsDropdown);
