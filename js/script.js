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

	// burger menu

	$('.burger').on('click', function() {
		$('.header-nav').slideToggle();
	});

	// dropdown artist lists

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

	// info section background

	mobileBgs = [
		"http://127.0.0.1:5500/img/info-bg/mobile-1.jpg",
		"http://127.0.0.1:5500/img/info-bg/mobile-2.jpg",
		"http://127.0.0.1:5500/img/info-bg/mobile-3.jpg"
	];
	tabletBgs = [
		"http://127.0.0.1:5500/img/info-bg/tablet-1.jpg",
		"http://127.0.0.1:5500/img/info-bg/tablet-2.jpg",
		"http://127.0.0.1:5500/img/info-bg/tablet-3.jpg"
	];
	desktopBgs = [
		"http://127.0.0.1:5500/img/info-bg/desktop-1.jpg",
		"http://127.0.0.1:5500/img/info-bg/desktop-2.jpg",
		"http://127.0.0.1:5500/img/info-bg/desktop-3.jpg"
	];

	mobileBgs.forEach(function(img) {
		new Image().src = img;
	});
	tabletBgs.forEach(function(img) {
		new Image().src = img;
	});
	desktopBgs.forEach(function(img) {
		new Image().src = img;
	});

	setInterval(function() {
		let infoSection = $('.info');

		if ($(window).width() < 768) {
			if (infoSection.css('background-image') === 'url("' + mobileBgs[0] + '")') {
				infoSection.css('background-image', 'url("' + mobileBgs[1] + '")')
			} else if (infoSection.css('background-image') === 'url("' + mobileBgs[1] + '")') {
				infoSection.css('background-image', 'url("' + mobileBgs[2] + '")')
			} else {
				infoSection.css('background-image', 'url("' + mobileBgs[0] + '")')
			}
		} else if ($(window).width() < 1650) {
			if (infoSection.css('background-image') === 'url("' + tabletBgs[0] + '")') {
				infoSection.css('background-image', 'url("' + tabletBgs[1] + '")')
			} else if (infoSection.css('background-image') === 'url("' + tabletBgs[1] + '")') {
				infoSection.css('background-image', 'url("' + tabletBgs[2] + '")')
			} else {
				infoSection.css('background-image', 'url("' + tabletBgs[0] + '")')
			}
		} else {
			if (infoSection.css('background-image') === 'url("' + desktopBgs[0] + '")') {
				infoSection.css('background-image', 'url("' + desktopBgs[1] + '")')
			} else if (infoSection.css('background-image') === 'url("' + desktopBgs[1] + '")') {
				infoSection.css('background-image', 'url("' + desktopBgs[2] + '")')
			} else {
				infoSection.css('background-image', 'url("' + desktopBgs[0] + '")')
			}
		}
	}, 10000);

	// gallery

	let mySwiper = new Swiper('.swiper-container', {
    navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		sldesPerView: 1,
		slidesPerColumn: 1,
		spaceBetween: 15,

		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 34,
			},
			1650: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 50,
			}
		}
	});

	$('.selectric').selectric();

	// $('.selectric').on('mouseover click', function() {
	// 	if ($('.selectric-selectric-middle').hasClass('.selectric-hover')) {
	// 		$('.selectric-selectric-top .selectric').css('border-radius', '6px')
	// 	}
	// });
});
