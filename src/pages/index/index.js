import "../../components/main-header/main-header.js";

// Datepicker
var $start = $('#find-room__from'), $end = $('#find-room__to');
$start.datepicker({
    clearButton: true,
    todayButton: true,
    prevHtml: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
    nextHtml: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transform:translate(15%,15%)" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
    navTitles: {
        days: 'MM yyyy'
    },
    minDate: new Date(),
    offset: 9,
    range: true,
    multipleDatesSeparator: "-",
    onSelect: function (fd, date, picker) {
        $start.val(fd.split("-")[0]);
        $('#find-room__to').val(fd.split("-")[1]);
    },
})


//Dropdown Guests
var inputDropdownGuests = document.querySelectorAll('.js-dropdown-guests');
for (var i = 0; i < inputDropdownGuests.length; i++) {
    inputDropdownGuests[i].addEventListener('click', function() {
        var input = this;
        var parent = input.closest('.dropdown-wrapper');
        var dropdownContent = parent.querySelector('.dropdown__content');

        var dropdownItems = dropdownContent.querySelectorAll('.dropdown__item:not(.dropdown__buttons)');
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
            input.value = '';
            var amountGuests = 0, amountBabies = 0, amountBabiesText;
            for (var i = 0; i < dropdownItems.length; i++) {
                var amount = dropdownItems[i].querySelector('.dropdown__amount').innerHTML;
                if (dropdownItems[i].querySelector('.dropdown__title').innerHTML == "Младенцы") amountBabies += +amount;
                amountGuests += +amount;
            }

            if (amountBabies == 1) amountBabiesText = ' младенец';
            else if (amountBabies >= 2 && amountBabies <= 4) amountBabiesText = ' младенца';
            else if (amountBabies >= 5 || amountBabies == 0) amountBabiesText = ' младенцев';

            if (amountGuests == 1) input.value = amountGuests + ' гость, ' + amountBabies + amountBabiesText;
            else if (amountGuests >= 2 && amountGuests <= 4) input.value = amountGuests + ' гостя, ' + amountBabies + amountBabiesText;
            else if (amountGuests >= 5 || amountGuests == 0) input.value = amountGuests + ' гостей, ' + amountBabies + amountBabiesText;

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
    });
}