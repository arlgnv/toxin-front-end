$('.main-header__burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass("main-header__burger_opened");
    $(this).next().slideToggle(1000);
});