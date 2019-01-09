
$(function() {
    var container = $("#pages").uiPages({effect : "scale"}, {effect : "scale"});

    container.uiPages(0);

    $("button").button();

    $(".homeButton").click(function() { container.uiPages(".home"); });
    $(".nextButton").click(function() { container.uiPages("next"); });
    $(".previousButton").click(function() { container.uiPages("previous"); });
    $(".gotoSecond").click(function() { container.uiPages("#second"); });
    $(".gotoThird").click(function() { container.uiPages(".third"); });
});
