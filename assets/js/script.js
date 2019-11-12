"use strict"

$(document).ready(function () {
	$("#hamburger").click(function () {
		$("div#myNav.overlay").fadeToggle("fast", "linear");
	});


	$('a').each(function(){
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('active'); $(this).parents('li').addClass('active');
		}
	});


	$(document).scroll(function () {
		var $nav = $("header");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	

	
});



(function () {

	$("#hamburger").click(function () {
		$("html").toggleClass("ham_on");
		return $("#hamburger").toggleClass("cross");
	});

}).call(this);
