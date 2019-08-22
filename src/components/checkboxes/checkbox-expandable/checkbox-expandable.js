$(".c-checkbox-expandable__title").click(function() {
    $(this).toggleClass("c-checkbox-expandable__title--expanded");

    $(this).next().slideToggle(0);
});