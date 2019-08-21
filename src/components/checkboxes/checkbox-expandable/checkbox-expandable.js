$(".js-checkbox-expandable").click(function() {
    $(this).toggleClass("c-checkbox-expandable__title--expanded");

    $(this).next().slideToggle(0);
});