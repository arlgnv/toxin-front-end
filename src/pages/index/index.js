/* global document */
import '../../utilities/jquery-global';

import 'air-datepicker';
import '../../components/header/header';
import '../../components/calendar/calendar';
import { initGuestsDropdown } from '../../components/dropdown/dropdown';

// Dropdown
const inputDropdownGuests = document.querySelector('.js-dropdown-guests');
inputDropdownGuests.addEventListener('click', initGuestsDropdown);
