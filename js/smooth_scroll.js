$(".navbar a[href^='#']").on('click', function(e) {
	// prevent default achor click behavior
	e.preventDefault();

	// store hash
	var hash = this.hash;

	// animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top -50
	}, 700, function() {
		// when done, add hash to url
		// (default click behavior)
		window.location.hash = hash;
	});
});