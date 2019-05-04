jQuery(document).ready(function($) {
 
	$('.slider-active').owlCarousel({
		items: 3,
		autoplay:true,
		loop:true,
		nav:false,
		dots:true,
		autoPlay: 1000,
		stopOnHover:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			},
			1100:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});

});