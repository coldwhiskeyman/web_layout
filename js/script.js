$(function() {
	$('.burger').on('click', function() {
		$('.mobile-nav').toggleClass('closed')
	});

	$('.styles-list__item').on('click', function(event) {
		$(this).find('.artist-dropdown').toggleClass('closed');
		$(this).find('.styles-list__link::after').animate({transform: '+=rotate(-180deg)'}); // не работает
	});
});
