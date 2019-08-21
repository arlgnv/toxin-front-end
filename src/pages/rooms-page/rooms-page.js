// Import
window.$ = window.jQuery = require("jquery");

require("ion-rangeslider");
require("../../components/range/range");

require("../../components/main-header/main-header");

require("../../components/checkboxes/checkbox-expandable/checkbox-expandable");

import { initComfortDropdown } from "../../components/field-dropdown/field-dropdown";

// Filter
const $filterShow = $('.filter__btn-mobile--show');
const $filterClose = $('.filter__btn-mobile--close');

$filterShow.click(function(event) {
    event.preventDefault();
    $(this).next().css("left", "0%");

    $filterClose.css("display", "block");

    document.body.style.overflow = 'hidden';
})

$filterClose.click(function(event) {
    event.preventDefault();
    $(this).parent(".filter__form").css('left', "110%");

    $filterClose.css("display", "none");

    document.body.style.overflow = 'visible';
})


// Dropdown comfort
const inputDropdownComfort = document.querySelector('#field-comfort');
inputDropdownComfort.addEventListener("click", initComfortDropdown);