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
		$('.header-nav').slideToggle();
	});

	let openedDropdown;
	let justOpened = false;

	$('.body').on('click', function(event) {
		if (openedDropdown && event.target != $('.styles-list__item') && event.target != $('.artist-dropdown') && !justOpened) {
			hideModal(openedDropdown);
		}
	})

	$('.styles-list__item').on('click', function(event) {
		let dropdown = $(this).find('.artist-dropdown');

		if (dropdown.hasClass('closed')) {
			if (openedDropdown) {
				hideModal(openedDropdown);
			};
			showModal(dropdown);
			openedDropdown = dropdown;
			justOpened = true;
			setTimeout(function() {
				justOpened = false;
			}, 1000)
		} else {
			hideModal(dropdown);
			openedDropdown = null;
		};
		$(this).find('.styles-list__link::after').css('transform', 'rotate(-180deg)'); // не работает
	});

	let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
