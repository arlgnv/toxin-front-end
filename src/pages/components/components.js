window.$ = window.jQuery = require("jquery");
require("ion-rangeslider");
require("air-datepicker");

require("../../components/main-header/main-header");
require("../../components/checkboxes/checkbox-expandable/checkbox-expandable");
require("../../components/range/range");
require("../../components/calendar/calendar");
import { initGuestsDropdown, initComfortDropdown } from "../../components/field-dropdown/field-dropdown";

// Dropdowns
const inputDropdownGuests = document.querySelectorAll("#c-field-dropdown-guests");
inputDropdownGuests.addEventListener("click", initGuestsDropdown);

const inputDropdownComfort = document.querySelectorAll("#c-field-dropdown-comfort");
inputDropdownComfort.addEventListener("click", initComfortDropdown);