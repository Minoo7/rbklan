"use strict"

function openNav() {
	document.getElementById("myNav").style.display = "block";
}

function closeNav() {
	document.getElementById("myNav").style.display = "none";
}

(function () {
	var resize;

	$("#hamburger").click(function () {
		$( "div.overlay" ).toggleClass( "show" );
		return $("#hamburger").toggleClass("cross");
	});

	/*resize = function () {
		return $("body").css({
			"margin-top": ~~((window.innerHeight - 150) / 2) + "px"
		});

	};

	//$(window).resize(resize);

	resize();*/

}).call(this);