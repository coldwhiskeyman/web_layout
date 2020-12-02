$(function() {
	function showModal(element) {
		element.removeClass('closed');
		setTimeout(function(){
			element.removeClass('hidden');
		}, 10);
	};

	function hideModal(element) {
		element.addClass('hidden');
		setTimeout(function(){
			element.addClass('closed');
		}, 500);
	};

	$('.burger').on('click', function() {
		$('.mobile-nav').toggleClass('closed')
	});

	$('.styles-list__item').on('click', function(event) {
		selfDropdown = $(this).find('.artist-dropdown')

		if (selfDropdown.hasClass('closed')) {
			showModal(selfDropdown);
		} else {
			hideModal(selfDropdown)
		};
		$(this).find('.styles-list__link::after').animate({transform: '+=rotate(-180deg)'}); // не работает
	});
});
