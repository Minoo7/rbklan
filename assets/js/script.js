"use strict"

$(document).ready(function(){
	$("#hamburger").click(function (){
	  $("div.overlay").fadeToggle( "fast", "linear" ) ;
	});
});

(function () {

	$("#hamburger").click(function () {
		return $("#hamburger").toggleClass("cross");
	});

	$(document).scroll(function () {
		var $nav = $("header");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  });

}).call(this);