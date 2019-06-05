// Datepicker
$('#find-room__from').datepicker({
    clearButton: true,
    todayButton: true,
    prevHtml: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
    nextHtml: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(15%,15%)" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
    navTitles: {
        days: 'MM yyyy'
    },

    minDate: new Date(),
    offset: 0,
    inline: true
})

//Dropdown Guests
var inputDropdownGuests = document.querySelector('.js-dropdown-guests');
inputDropdownGuests.addEventListener('click', initGuestsDropdown);

function initGuestsDropdown() {
    var parent = this.closest('.dropdown__wrapper');
    var dropdownContent = parent.querySelector('.dropdown__content');

    var dropdownAmouts = dropdownContent.querySelectorAll('.dropdown__amount');
    var dropdownDelButtons = dropdownContent.querySelectorAll('.dropdown__del');
    var dropdownInsButtons = dropdownContent.querySelectorAll('.dropdown__ins');

    for (var i = 0; i < dropdownAmouts.length; i++) {
        dropdownDelButtons[i].addEventListener('click', subtractOne);
        dropdownInsButtons[i].addEventListener('click', insertOne);
    }

    var dropdownClear = dropdownContent.querySelector('.dropdown__clear');
    dropdownClear.addEventListener('click', clearEntry);

    var dropdownApply = dropdownContent.querySelector('.dropdown__apply');
    dropdownApply.addEventListener('click', applyChanges);

    dropdownContent.style.display = 'block';

    function subtractOne() {
        var dropdownAmount = this.nextElementSibling;
        if (dropdownAmount.innerHTML == 1) {
            dropdownAmount.innerHTML = dropdownAmount.innerHTML - 1;
            this.style = '';
            checkFields(dropdownAmouts, dropdownClear);
        } else if (dropdownAmount.innerHTML > 1) {
            dropdownAmount.innerHTML = dropdownAmount.innerHTML - 1;
        }
    }

    function insertOne() {
        var dropdownAmount = this.previousElementSibling;
        dropdownAmount.innerHTML = +dropdownAmount.innerHTML + 1;

        var dropdownDel = dropdownAmount.previousElementSibling;
        dropdownDel.style.opacity = '1';

        dropdownClear.style.display = 'block';
    }

    function clearEntry() {
        for (var i = 0; i < dropdownAmouts.length; i++) {
            dropdownAmouts[i].innerHTML = 0;
            dropdownDelButtons[i].style = '';
        }
        this.style.display = 'none';
    }

    function applyChanges() {
        inputDropdownGuests.value = '';
        var num = 0;
        for (var i = 0; i < dropdownAmouts.length; i++) num += +dropdownAmouts[i].innerHTML;

            if (num == 1) inputDropdownGuests.value = num + ' гость';
        else if (num >= 2 && num <= 4) inputDropdownGuests.value = num + ' гостя';
        else if (num >= 5 || num == 0) inputDropdownGuests.value = num + ' гостей';

        dropdownContent.style = '';

        for (var i = 0; i < dropdownAmouts.length; i++) {
            dropdownDelButtons[i].removeEventListener('click', subtractOne);
            dropdownInsButtons[i].removeEventListener('click', insertOne);
        }
    }

    function checkFields(fieldsArr, clearButton) {
        var flag = true;
        for (var i = 0; i < fieldsArr.length; i++) {
            if (fieldsArr[i].innerHTML > 0) flag = false;
        }

        if (flag) clearButton.style = '';
    }
}

// var $start = $('#find-room__from'),
//     $end = $('#find-room__to');

// $start.datepicker({
//     onSelect: function (fd, date) {
//         $end.data('datepicker')
//                 .update('minDate', date);

//         $end.focus();
//     }
// })

// $end.datepicker({
//     onSelect: function (fd, date) {
//         $start.data('datepicker')
//                 .update('maxDate', date)
//     }
// })