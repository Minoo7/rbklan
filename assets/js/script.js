"use strict"

$(document).ready(function () {
	$('a').each(function () {
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('active');
			$(this).parents('li').addClass('active');
		}
	});

	if (($("html").scrollTop()) > 0) {
		var $nav = $("header");
		$nav.toggleClass('scrolled_i', $(this).scrollTop() > $nav.height());
	}

	$(document).scroll(function () {
		var $nav = $("header");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

(function () {
	$("#hamburger").click(function () {
		$("div#myNav.overlay").fadeToggle("fast", "linear");
		if (!(window.orientation > -1)) {
			$("html").toggleClass("ham_on");
			$(".right").toggleClass("hamburger-margin");
			$("#overlay-content").toggleClass("overlay-margin");
		}
		return $("#hamburger").toggleClass("cross");
	});

	function clearSelection() {
		if(document.selection && document.selection.empty) {
			document.selection.empty();
		} else if(window.getSelection) {
			var sel = window.getSelection();
			sel.removeAllRanges();
		}
	}

}).call(this);