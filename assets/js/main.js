;(function($) {

	var windowWidth = $(window).width();

	$(function() {

		// Slider
		$('.client-slider').slick({
			arrows: false,
			dots: true,
			slide: '.client-slide',
			speed: 1200
		});

		//Scroll page and Add header menu item active class
		$(document).on('click', '.navigation__link, .scroll-top__link', function(event) {
			event.preventDefault();

			var elementId = $(this).attr('href');
			var top = $(elementId).offset().top;
		
			$('body').animate({
				scrollTop: top
			}, 1200);
		});// end click

		$(document).on('click', '.menu-toggle', function(event) {
			event.preventDefault();

			$('.navigation').toggleClass('js-nav-open');
			$('.navigation__list').slideToggle();
		}); // end click
	}); // end ready

	$(window).resize(function(event) {

		var windowWidth = $(window).width();
		var scrollWidth = scrollbarWidth();

		if(windowWidth <= (768 - scrollWidth) ) {
			$('.navigation__list').slideUp();
			$('.navigation').removeClass('js-nav-open');
		} else {
			$('.navigation__list').show();

		}
	}); // end resize

	$(window).scroll(function(event) {

		//Show scroll to top arrow 
		var headerHeight = $('#scroll-top').outerHeight();
		var scroll = $(window).scrollTop();

		$('.scroll-top').addClass('js-scroll');

		setTimeout(function() {
			$('.scroll-top').removeClass('js-scroll');
		}, 300);

		if(scroll > headerHeight) {
			$('.scroll-top').addClass('js-scroll-top-show');
		} else {
			$('.scroll-top').removeClass('js-scroll-top-show');
		}
	}); // end scroll

	function scrollbarWidth() {
  		var documentWidth = parseInt(document.documentElement.clientWidth);
  		var windowsWidth = parseInt(window.innerWidth);
  		var scrollbarWidth = windowsWidth - documentWidth;
  		return scrollbarWidth;
	}

})(jQuery);