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

	let openedDropdown;

	$('.styles-list__item').on('click', function(event) {
		dropdown = $(this).find('.artist-dropdown')

		if (dropdown.hasClass('closed')) {
			if (openedDropdown) {
				hideModal(openedDropdown);
			};
			showModal(dropdown);
			openedDropdown = dropdown;
		} else {
			hideModal(dropdown);
			openedDropdown = null;
		};
		$(this).find('.styles-list__link::after').animate({transform: '+=rotate(-180deg)'}); // не работает
	});
});
