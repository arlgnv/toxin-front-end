/* global document */
import '../../utilities/jquery-global';

import 'air-datepicker';
import '../../components/main-header/main-header';
import '../../components/calendar/calendar';
import { initGuestsDropdown } from '../../components/dropdowns/dropdown';

// Dropdown
const inputDropdownGuests = document.querySelector('.js-dropdown_type_guests');
inputDropdownGuests.addEventListener('click', initGuestsDropdown);
