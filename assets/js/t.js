$(document).ready(function () {
    /*$("#lol").click(function () {
        $("#lol").addClass("move");
        document.getElementById("lol").addEventListener("transitionend", window.location.href = "./turneringar.html#lol");
    });*/

    $("#lol").click(function () {
        $("#lol").addClass("move");
        $("#lol").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function (e) {
                window.location.href = "./turneringar.html#lol";
            });
    });
});

function myEndFunction() {
    //window.open('turneringar.html#lol', '_self');
    window.location.href = "./turneringar.html#lol";
}