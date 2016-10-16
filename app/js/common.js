$(function(){

	$('.toggle-menu').click(function() {
		$(this).toggleClass('on');
		$('.hidden-menu').slideToggle('slow');
	});


	$('.main-menu').on('click','a', function(){
		$('body,html').animate({scrollTop:$($(this).attr('href')).position().top-79}, 500);
		//$('.hidden-menu').slideToggle('slow');
	});


	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30
	});


	$('.map').click(function(){
		$(this).find('iframe').addClass('clicked')
	}).mouseleave(function(){
		$(this).find('iframe').removeClass('clicked')
	});

	

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('header').addClass('fixed');
			$('#company').addClass('mt80');
		} else {
			$('header').removeClass('fixed'),
			$('#company').removeClass('mt80');
		}
	});

});
