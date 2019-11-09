$(document).ready(function () {
    /*$("#lol").click(function () {
        $("#lol").addClass("move");
        document.getElementById("lol").addEventListener("transitionend", window.location.href = "./turneringar.html#lol");
    });*/

    var lol = $("#lol");
    var csgo = $("#cs");
    var fortnite = $("#fortnite");

    lol.click(function () {
        var gap = (($("#spel").width()) * 0.1);
        var width = 350 + gap;

        lol.css("z-index", "1").transition({
            x: width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        fortnite.transition({
            x: '-' + width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        setTimeout(function () {
            window.location = "./turneringar.html#lol";
        }, 500);

        return false;

        /*$("#lol").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function (e) {
                fortnite.hide();
                csgo.hide();
                //lol.children("img").css("width", "351px");
                window.location.href = "./turneringar.html#lol";
                //lol.css("transform", "translateX(100%)");
                //fortnite.css("transform", "translateX(-100%)");
                //$("#spel").css("grid-gap", "0");
            });*/
    });

    csgo.children("a").click(function (event) {
        event.preventDefault();
        var gap = (($("#spel").width()) * 0.1);
        var width = 350 + gap;

        csgo.children("a").children("img").css("width", "351px");

        csgo.css("z-index", "5");

        lol.transition({
            x: width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        fortnite.transition({
            x: '-' + width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        setTimeout(function () {
            window.location = "./turneringar.html#csgo";
        }, 500);

        return false;
    });

    fortnite.children("a").click(function (event) {
        $("#lol,#cs").css("")
        event.preventDefault();
        var gap = (($("#spel").width()) * 0.1);
        var width = 350 + gap;

        //fortnite.children("a").children("img").css("width", "352px");

        fortnite.css("z-index", "5");

        lol.transition({
            x: width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        fortnite.transition({
            x: '-' + width
        }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

        fortnite.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function (e) {
                $("#lol,#cs").css("visibility", "hidden");
                //fortnite.css("transform", "translateX(120%)");
                //csgo.hide();
                //lol.children("img").css("width", "351px");
                //fortnite.css("transform", "translateX(-100%)");
                //$("#spel").css("grid-gap", "0");
                //window.location.href = "./turneringar.html#lol";
            });

        /*setTimeout(function () {
            window.location = "./turneringar.html#csgo";
        }, 500);

        return false;*/
    });
});