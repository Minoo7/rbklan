window.onload = (function () {
    //window.scrollTo(scrollPos, 0);

    var topMargin = $(".content").position().top;
    var bottomMargin = 58;

    var l_h = $("#lol .content").height() + topMargin + bottomMargin;
    var c_h = $("#csgo .content").height() + topMargin + bottomMargin;
    var f_h = $("#fortnite .content").height() + topMargin + bottomMargin;

    $("#lol-bg").height(l_h);
    $("#csgo-bg").height(c_h);
    $("#fortnite-bg").height(f_h);
});

$(document).ready(function () {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
});

$(window).on('resize', function () {
    var topMargin = $(".content").position().top;
    var bottomMargin = 58;

    var l_h = $("#lol .content").height() + topMargin + bottomMargin;
    var c_h = $("#csgo .content").height() + topMargin + bottomMargin;
    var f_h = $("#fortnite .content").height() + topMargin + bottomMargin;

    $("#lol-bg").height(l_h);
    $("#csgo-bg").height(c_h);
    $("#fortnite-bg").height(f_h);
});