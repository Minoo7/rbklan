$(document).ready(function() {
    $.get("imports/navigation.html", function (data) {
        $("#get-nav").replaceWith(data);
    });

    $.get("imports/footer.html", function (data) {
        $("#get-footer").replaceWith(data);
    });
});