$('.main-header__burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass("main-header__burger--opened");
    $(this).next().slideToggle(1000);
});