function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}

// Set the date we're counting down to
//var countDownDate = new Date("Jan 7, 2020 17:00:00").getTime();
var countDownDate = new Date("Mar 6, 2020 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //document.getElementById("countdown").innerHTML = days + "" + hours + " " +
    //    minutes + ":" + seconds;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = minTwoDigits(hours);
    document.getElementById("minutes").innerHTML = minTwoDigits(minutes);
    document.getElementById("seconds").innerHTML = minTwoDigits(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
        $("#primary div ul li p").hide();
        $("#live").show();
    }
}, 1000);