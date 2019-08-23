window.$ = window.jQuery = require("jquery");
require("air-datepicker");

require("../../components/main-header/main-header");
require("../../components/calendar/calendar");
import { initGuestsDropdown } from "./../../components/field-dropdown/field-dropdown";

// Dropdown
const inputDropdownGuests = document.querySelector("#amount-guests");
inputDropdownGuests.addEventListener("click", initGuestsDropdown);
