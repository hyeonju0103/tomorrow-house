const slider = tns({
	container: '.product-carousel .slider-list',
	items: 1,
	controls: false,
	nav: true,
	navContainer: '.product-carousel .thumbnail-list',
	navAsContainer: true,
	arrowKeys: true,
	autoplay: false,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	mouseDrag: true,
	preventScrollOnTouch: true
});

const userGallery = tns({
	container: '.user-gallery-slider .slider-list',
	items: 1,
	gutter: 4,
	edgePadding: 16,
	loop: false,
	arrowKeys: true,
	autoplay: false,
	controls: false,
	mouseDrag: true,
	preventScrollOnTouch: true,
	responsive: {
		768: {
			gutter: 6,
			edgePadding: 70,
			controls: true,
		}
	}
})