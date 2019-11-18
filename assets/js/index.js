"use strict"

window.onload = (function () {
    document.getElementById('countdown-container').style.visibility = 'visible'
});

$(document).ready(function () {
    var game = $(".game");
    var lol = $("#lol");
    var csgo = $("#csgo");
    var fortnite = $("#fortnite");
    game.click(function () {
        if (window.matchMedia("(min-width: 1200px)").matches) {

            game.children("a").click(function (e) {
                e.preventDefault();
            });

            var id = $(this).attr("id");
            var gap = (($("#spel").width()) * 0.1);
            var width = 350 + gap;

            game.not(this).css("box-shadow", "unset");

            if (id == "lol") {
                lol.css("z-index", "1");
            }
            if (id == "csgo") {
                csgo.css("z-index", "5");
            }

            lol.transition({
                x: width
            }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

            fortnite.transition({
                x: '-' + width
            }, 500, 'cubic-bezier(0.250,0.460,0.450,0.940)');

            setTimeout(function () {
                window.location = "./turneringar#" + id;
            }, 500);
        
            return false;
        }
    });
});

function math(ntn, number) {
    var len = Math.floor(Math.log(number) / Math.LN10) - ntn;
    return ((number / Math.pow(10, len)) % 10) | 0;
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}

// Set the date we're counting down to
var countDownDate = new Date("Mar 6, 2020 19:00:00").getTime();

var second;
var seconds_1;
var seconds_2;

// Update the count down every 1 second
$(document).ready(function () {
    function counter() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        second = minTwoDigits(Math.floor((distance % (1000 * 60)) / 1000));
        second = second.toString();

        seconds_1 = second.charAt(0);
        seconds_2 = second.charAt(1);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = minTwoDigits(hours);
        document.getElementById("minutes").innerHTML = minTwoDigits(minutes);
        document.getElementById("seconds_1").innerHTML = seconds_1;
        document.getElementById("seconds_2").innerHTML = seconds_2;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-container").style.display = "none";
            $("#live").show();
        }
    }

    // run it initially
    counter();

    // run it every second
    var x = setInterval(function () {
        counter();
    }, 1000);
});