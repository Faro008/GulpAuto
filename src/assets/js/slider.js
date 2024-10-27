$(document).ready(function () {
	$("#Slider").slick({
		slidesToShow: 1
		, slidesToScroll: 1
		, autoplay: true
		, speed: 3000
		, autoplaySpeed: 3000
		, arrows: false
		, dots: true
	, });
	$('.slick').slick({
		infinite: true
		, slidesToShow: 11
		, slidesToScroll: 3
		, arrows: false
	, });
	$('.slick__down').slick({
  infinite: true
		, slidesToShow: 5
		, slidesToScroll: 1
		, arrows: false
	,
});
});
