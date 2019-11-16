"use strict"

$(document).ready(function () {

	//window.addEventListener("scroll", noscroll);

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function event1() {
		console.log('Event triggered');
		if (window.addEventListener)
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.onwheel = preventDefault;

	}

	/*function event2() {
		console.log('Event triggered');
		  if (window.removeEventListener)
			  window.removeEventListener('DOMMouseScroll', preventDefault, false);
		   
		  window.onwheel = null; 
		   
	  }*/

	$('a').each(function () {
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('active');
			$(this).parents('li').addClass('active');
		}
	});

	$(document).scroll(function () {
		var $nav = $("header");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

});

var clicked = false;

(function () {

	$("#hamburger").click(function () {
		//clicked = !clicked;

		if (!(clicked)) {
			console.log("clicked = " + clicked)
			clicked = !clicked;
		}
		else {
			console.log("clicked = " + clicked)
			$("#overlay-content").css("left", "-5px");
			clicked = !clicked;
		}
		$("div#myNav.overlay").fadeToggle("fast", "linear");
		$("html").toggleClass("ham_on");
		//$("#overlay-content").toggleClass("overlay-margin");
		//$("header").css("margin-right", "0px");
		return $("#hamburger").toggleClass("cross");
	});

}).call(this);