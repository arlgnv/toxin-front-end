$('.main-header__burger').click(function() {
    var $elem = $(this);
    $elem.toggleClass("main-header__burger--opened");
    $elem.next().slideToggle(1000);
});