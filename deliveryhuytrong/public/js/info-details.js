$(document).ready(function() {
	$(".goToTop > a").hide();
	$(".goToTop > a").click(function() {
		$("html, body").animate({scrollTop:0}, 800);
	});
	$(window).scroll(function() {
		if ($("html, body").scrollTop() > 200) {
			$(".goToTop > a").fadeIn("slow");
		} else {
			$(".goToTop > a").fadeOut("slow");
		}
	});
});

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause:true,
		autoPlayTime:3000,
		dotsSpeed:500,
		smartSpeed:1000,
		slideBy:2,
		responsive:{
			0:{
				items:1
			},
			60:{
				items:2
			},
			800:{
				items:3
			},
			1000:{
				items:4
			},
		}
	});
});