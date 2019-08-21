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