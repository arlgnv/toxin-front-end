// Burger menu
import "../../components/main-header/main-header.js";

// Filter
var $filterShow = $('.filter__btn-mobile--show'),
    $filterClose = $('.filter__btn-mobile--close');

$filterShow.click(function(event) {
    event.preventDefault();
    var $elem = $(this);
    $elem.next().css("left", "0%");

    $filterClose.css("display", "block");

    document.body.style.overflow = 'hidden';
})

$filterClose.click(function(event) {
    event.preventDefault();
    var $elem = $(this);
    $elem.parent(".filter__form").css('left', "110%");

    $filterClose.css("display", "none");

    document.body.style.overflow = 'visible';
})

//Range
var $rangePrice = $('.c-range__price');
$(".js-range-slider").ionRangeSlider({
    skin: "custom",
    type: "double",
    min: 0,
    max: 15000,
    hide_min_max: true,
    from: 5000,
    to: 10000,
    hide_from_to: true,
    onStart: function(data) {
        var from = data.from;
        var to = data.to;

        $rangePrice.html(from + "₽ - " + to + "₽");
    },
    onChange: function(data) {
        var from = data.from;
        var to = data.to;

        $rangePrice.html(from + "₽ - " + to + "₽");
    },
});


//Checkbox Expandable
$('.js-checkbox-expandable').click(function() {
    var $this = $(this);

    $this.toggleClass('c-checkbox-expandable__title--expanded');

    $this.next().slideToggle(0);
});

// Dropdown comfort
var inputDropdownComfort = document.querySelectorAll('.js-dropdown-comfort');
for (var k = 0; k < inputDropdownComfort.length; k++) {
    inputDropdownComfort[k].addEventListener('click', function initDropdownComfort() {
        var input = this;
        input.removeEventListener('click', initDropdownComfort);
        input.addEventListener('click', applyChanges);

        var parent = input.closest('.dropdown-wrapper');
        var dropdownContent = parent.querySelector('.dropdown__content');

        var dropdownItems = dropdownContent.querySelectorAll('.dropdown__item');
        var dropdownAmouts = dropdownContent.querySelectorAll('.dropdown__amount');
        var dropdownDelButtons = dropdownContent.querySelectorAll('.dropdown__del');
        var dropdownInsButtons = dropdownContent.querySelectorAll('.dropdown__ins');

        for (var i = 0; i < dropdownAmouts.length; i++) {
            dropdownDelButtons[i].addEventListener('click', subtractOne);
            dropdownInsButtons[i].addEventListener('click', insertOne);
        }

        dropdownContent.style.display = 'block';


        function subtractOne() {
            var dropdownAmount = this.nextElementSibling;
            if (dropdownAmount.innerHTML == 1) {
                dropdownAmount.innerHTML = dropdownAmount.innerHTML - 1;
                this.style = '';
            } else if (dropdownAmount.innerHTML > 1) {
                dropdownAmount.innerHTML = dropdownAmount.innerHTML - 1;
            }
        }

        function insertOne() {
            var dropdownAmount = this.previousElementSibling;
            dropdownAmount.innerHTML = +dropdownAmount.innerHTML + 1;

            var dropdownDel = dropdownAmount.previousElementSibling;
            dropdownDel.style.opacity = '1';
        }

        function applyChanges() {
            input.removeEventListener('click', applyChanges);
            input.value = '';
            var str = '';
            for (var i = 0; i < dropdownItems.length; i++) {
                var title = dropdownItems[i].querySelector('.dropdown__title').innerHTML;
                var amount = dropdownItems[i].querySelector('.dropdown__amount').innerHTML;

                if (title == 'Спальни') {
                    if (amount == 1) str += amount + ' спальня, ';
                    else if (amount >= 2 && amount <= 4) str += amount + ' спальни, ';
                    else if (amount >= 5 || amount == 0) str += amount + ' спален, ';
                } else if (title == 'Кровати') {
                    if (amount == 1) str += amount + ' кровать, ';
                    else if (amount >= 2 && amount <= 4) str += amount + ' кровати, ';
                    else if (amount >= 5 || amount == 0) str += amount + ' кроватей, ';
                } else if (title == 'Ванные комнаты') {
                    if (amount == 1) str += amount + ' ванная комната';
                    else if (amount >= 2 && amount <= 4) str += amount + ' ванные комнаты';
                    else if (amount >= 5 || amount == 0) str += amount + ' ванных комнат';
                }
            }

            input.value = str;
            input.addEventListener('click', initDropdownComfort);

            dropdownContent.style = '';

            for (var i = 0; i < dropdownAmouts.length; i++) {
                dropdownDelButtons[i].removeEventListener('click', subtractOne);
                dropdownInsButtons[i].removeEventListener('click', insertOne);
            }
        }
    });
}