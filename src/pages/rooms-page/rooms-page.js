// Import
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

require("ion-rangeslider");
require("../../components/main-header/main-header");
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


//Range
const $rangePrice = $('.c-range__price');
$(".js-range-slider").ionRangeSlider({
    skin: "custom",
    type: "double",
    min: 0,
    max: 15000,
    hide_min_max: true,
    from: 5000,
    to: 10000,
    hide_from_to: true,
    onStart: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
    onChange: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
});


//Checkbox Expandable
$('.js-checkbox-expandable').click(function() {
    $(this).toggleClass('c-checkbox-expandable__title--expanded');

    $(this).next().slideToggle(0);
});


// Dropdown comfort
const inputDropdownComfort = document.querySelector('#field-comfort');
inputDropdownComfort.addEventListener("click", initComfortDropdown);