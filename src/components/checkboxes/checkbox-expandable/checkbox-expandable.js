$(".c-checkbox-expandable__title").click(function() {
    $(this).toggleClass("c-checkbox-expandable__title_expanded");

    $(this).next().slideToggle(0);
});