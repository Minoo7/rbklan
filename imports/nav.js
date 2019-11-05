(function () {
	var resize;

	$("#hamburger").click(function () {
		return $("#hamburger").toggleClass("cross");
	});

	resize = function () {
		return $("body").css({
			"margin-top": ~~((window.innerHeight - 150) / 2) + "px"
		});

	};

	//$(window).resize(resize);

	resize();

}).call(this);