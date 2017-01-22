;(function($) {

	var windowWidth = $(window).width();
	var $navList = $('.navigation__list');
	var $navMenu = $('.navigation');

	$(function() {

		// Slider
		$('.client-slider').slick({
			arrows: false,
			dots: true,
			slide: '.client-slide',
			speed: 1200
		});

		//Scroll page to need section
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

			$navMenu.toggleClass('js-nav-open');
			$navList.slideToggle();
		}); // end click
	}); // end ready

	$(window).resize(function(event) {

		var windowWidth = $(window).width();
		var scrollWidth = scrollbarWidth();

		console.log(scrollWidth);

		if(windowWidth <= (768 - scrollWidth) ) {
			$navList.slideUp();
			$navMenu.removeClass('js-nav-open');
		} else {
			$navList.show();

		}
	}); // end resize

	$(window).scroll(function(event) {

		//Show scroll to top arrow 
		var headerHeight = $('#scroll-top').outerHeight();
		var scroll = $(window).scrollTop();
		var $scrollTop = $('.scroll-top');

		$scrollTop.addClass('js-scroll');

		setTimeout(function() {
			$scrollTop.removeClass('js-scroll');
		}, 300);

		if(scroll > headerHeight) {
			$scrollTop.addClass('js-scroll-top-show');
		} else {
			$scrollTop.removeClass('js-scroll-top-show');
		}

		//Hide mobile menu
		$navList.slideUp();
		$navMenu.removeClass('js-nav-open');
	}); // end scroll

	function scrollbarWidth() {
  		var documentWidth = parseInt(document.documentElement.clientWidth);
  		var windowsWidth = parseInt(window.innerWidth);
  		var scrollbarWidth = windowsWidth - documentWidth;
  		return scrollbarWidth;
	}

})(jQuery);