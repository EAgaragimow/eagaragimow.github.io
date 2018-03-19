$(document).ready(function() {



	$('#main-slider .container').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000
	});

	$('#second-slider .container').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
					slidesToShow: 2,
        			slideMove: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
					slidesToShow: 1,
        			slideMove: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
					slidesToShow: 3,
        			slideMove: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
					slidesToShow: 1,
        			slideMove: 1
                }
            }
        ]
	});

	var show = $('#show-menu');
	var hide = $('#close');

	$(window).on('load scroll resize', function() {

		var dw = $(window).width();

		if ( dw <= 991 ) {
			show.show();
			hide.show();
			$('.title').attr("id", "title").removeClass("sub-menu__item");

			$('.user-cart span.text').remove();


			$('.catalogue-menu__item').on('click', function(e) {
				e.preventDefault();
				$('#submenu', this).toggle();
			});
			$('.submenu2 .sub-menu .catalogue-menu__item').on('click', function(e) {
				e.preventDefault();
				$('#sub-menu2', this).toggle();
				return false;
			});
			$('.catalogue-menu__item').on('click', function(e) {
				e.preventDefault();
				$('#submenu2', this).toggle();
			});

			$('.sub-menu-first .sub-menu-first__item').on('click', function(e) {
				e.preventDefault();
				$('.sub-menu', this).toggle();
				return false;
			});
			$('.sub-menu-second .sub-menu-second__item').on('click', function(e) {
				e.preventDefault();
				$('.sub-menu', this).toggle();
				return false;
			});
			$('.sub-menu-third .sub-menu-third__item').on('click', function(e) {
				e.preventDefault();
				$('.sub-menu', this).toggle();
				return false;
			});


			show.click(function() {
				$('#aside').animate({
					left: "-15px",
					opacity: 1
				}, 800);
				$(show).animate({
					opacity: 0
				}, 500);
			});

			hide.click(function() {
				$('#aside').animate({
					left: "-50%",
					opacity: 0
				}, 800);
				$(show).animate({
					opacity: 1
				}, 500);
			});

		} else {
			show.hide();
			hide.hide();
		}

		if ( dw <= 575 ) {

			show.click(function() {
				$('body').css({
					overflow: 'hidden'
				});
				$('.catalogue').css({
					overflow: 'scroll',
					height: '100vh'
				});
			});

			hide.click(function() {
				$('#aside').animate({
					left: "-100%",
					opacity: 0
				}, 800);
				$(show).animate({
					opacity: 1
				}, 500);
				$('body').css({
					overflow: 'scroll'
				});
				$('.catalogue').css({
					overflow: 'scroll',
					height: 'auto'
				});
			});

		}

	});


});