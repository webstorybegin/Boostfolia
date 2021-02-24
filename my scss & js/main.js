$(function(){
	$('.works__slider	').slick({
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
	})

	$('.slider__left-column').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		infinite: false
	})

	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active')
	})
	
	$('.footer__top-title').click(function(event){
		$(this).toggleClass('active').next().slideToggle(300)
	})
});

