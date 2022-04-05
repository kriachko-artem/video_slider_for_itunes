function generateSlider() {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 300,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		pauseOnDotsHover: true,
		touchThreshold: 30,
		waitForAnimate: false,
		centerMode: true,
		variableWidth: false,
		asNavFor: ".big_slider",

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					centerMode: true,
				}
			}
		]

	})
	// Big Slider
	$('.big_slider').slick({
		centerMode: true,
		arrows: false,
		fade: true,
		asNavFor: ".slider",
	});
}