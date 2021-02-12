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
	let activeLink;
	let justOpened = false;

	$('.body').on('click', function(event) {
		if (openedDropdown && event.target != $('.styles-list__item') && event.target != $('.artist-dropdown') && !justOpened) {
			hideModal(openedDropdown);
			activeLink.find('.styles-list__button').removeClass('rotated');
		}
	})

	$('.styles-list__item').on('click', function(event) {
		let dropdown = $(this).find('.artist-dropdown');

		if (dropdown.hasClass('closed')) {
			if (openedDropdown) {
				hideModal(openedDropdown);
				activeLink.find('.styles-list__button').removeClass('rotated');
			};
			showModal(dropdown);
			openedDropdown = dropdown;
			activeLink = $(this);
			activeLink.find('.styles-list__button').addClass('rotated');
			justOpened = true;
			setTimeout(function() {
				justOpened = false;
			}, 600)
		} else {
			hideModal(dropdown);
			activeLink.find('.styles-list__button').removeClass('rotated');
			openedDropdown = null;
			activeLink = null;
		};
	});

	// info section background

	mobileBgs = [
		"img/info-bg/mobile-1.jpg",
		"img/info-bg/mobile-2.jpg",
		"img/info-bg/mobile-3.jpg"
	];
	tabletBgs = [
		"img/info-bg/tablet-1.jpg",
		"img/info-bg/tablet-2.jpg",
		"img/info-bg/tablet-3.jpg"
	];
	desktopBgs = [
		"img/info-bg/desktop-1.jpg",
		"img/info-bg/desktop-2.jpg",
		"img/info-bg/desktop-3.jpg"
	];

	setInterval(function() {
		let infoSection = $('.info');
		index = infoSection.css('background-image').indexOf('img/info-bg');
		slicedUrl = infoSection.css('background-image').slice(index);
		picNumberStr = slicedUrl[slicedUrl.indexOf('.jpg') - 1];
		picNumber = parseInt(picNumberStr, 10);

		if ($(window).width() < 768) {
			if (picNumber === mobileBgs.length) {
				infoSection.css('background-image', 'url("' + mobileBgs[0] + '")');
			} else {
				infoSection.css('background-image', 'url("' + mobileBgs[picNumber] + '")');
			}
		} else if ($(window).width() < 1650) {
			if (picNumber === tabletBgs.length) {
				infoSection.css('background-image', 'url("' + tabletBgs[0] + '")');
			} else {
				infoSection.css('background-image', 'url("' + tabletBgs[picNumber] + '")');
			}
		} else {
			if (picNumber === desktopBgs.length) {
				infoSection.css('background-image', 'url("' + desktopBgs[0] + '")');
			} else {
				infoSection.css('background-image', 'url("' + desktopBgs[picNumber] + '")');
			}
		}
	}, 10000);

	// gallery

	let gallerySwiper = new Swiper('.gallery-swiper', {
    navigation: {
			nextEl: '.gallery-swiper__button-next',
			prevEl: '.gallery-swiper__button-prev',
		},
		pagination: {
			el: '.gallery-swiper__pagination',
			type: 'fraction',
		},

		slidesPerView: 1,
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

	$('.selectric').selectric({ disableOnMobile: false, nativeOnMobile: false });

	// catalog

	$(".artists-catalog").accordion({
		collapsible: true,
		icons: false,
		heightStyle: "content",
	});

	$("#tabs").tabs({
		hide: "slide",
		show: "slide",
		active: 2
	});

	$('.flags__button').on('mousedown', function() {
		$('.flags').find('.active').removeClass('active');
	});
	$('.flags__button').on('mouseup', function() {
		$(this).parent().addClass('active');
	});

	// events

	const eventsBreakpoint = window.matchMedia( '(min-width:768px)' );
	let eventsSwiper;

	const eventsBreakpointChecker = function() {
		if ( eventsBreakpoint.matches === true ) {
			 if ( eventsSwiper !== undefined ) eventsSwiper.destroy( true, true );
			 return;
		} else if ( eventsBreakpoint.matches === false ) {
			 return enableEventsSwiper();
		}
  };

	const enableEventsSwiper = function() {
		eventsSwiper = new Swiper('.events-swiper', {
			pagination: {
				el: '.events-swiper__pagination',
			},
		});
  };

	eventsBreakpoint.addEventListener('change', eventsBreakpointChecker);
	eventsBreakpointChecker();

	$('.events-enable-btn').on('click', function() {
		$('.event-card_third').show('slide');
		$('.event-card_last').show('slide');
		$('.events-enable-btn').fadeOut();
	});

	// publications

	categoriesOpened = false;
	if ($(window).width() < 768) {
		$('.categories-fieldset__legend').on('click', function() {
			if (categoriesOpened) {
				$('.categories-fieldset__checkbox').each(function() {
					if (!$(this).find('.checkbox__input').is(':checked')) {
						$(this).removeClass('active');
					};
				});
				categoriesOpened = false;
			} else {
				$('.categories-fieldset__checkbox').each(function() {
					$(this).addClass('active');
				});
				categoriesOpened = true;
			};
		});
		$('.categories-fieldset__checkbox').on('click', function() {
			if (!categoriesOpened) {
				$(this).removeClass('active');
			};
		});
	};


	const publicationsBreakpoint = window.matchMedia( '(max-width:767px)' );
	let publicationsSwiper;

	const publicationsBreakpointChecker = function() {
		if ( publicationsBreakpoint.matches === true ) {
			 if ( publicationsSwiper !== undefined ) publicationsSwiper.destroy( true, true );
			 return;
		} else if ( publicationsBreakpoint.matches === false ) {
			 return enablePublicationsSwiper();
		}
  };

	const enablePublicationsSwiper = function() {
		publicationsSwiper = new Swiper('.publications-swiper', {
			navigation: {
				nextEl: '.publications-swiper__button-next',
				prevEl: '.publications-swiper__button-prev',
			},
			pagination: {
				el: '.publications-swiper__pagination',
				type: 'fraction',
			},
			slidesPerView: 2,
			spaceBetween: 34,
			breakpoints: {
				1024: {
					spaceBetween: 49,
				},
				1650: {
					slidesPerView: 3,
					spaceBetween: 50,
				}
			}
		});
  };

	publicationsBreakpoint.addEventListener('change', publicationsBreakpointChecker);
	publicationsBreakpointChecker();

	// projects

	let projectsSwiper = new Swiper('.projects-swiper', {
    navigation: {
			nextEl: '.projects-swiper__button-next',
			prevEl: '.projects-swiper__button-prev',
		},

		slidesPerView: 1,
		spaceBetween: 15,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 34,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			1650: {
				slidesPerView: 3,
				spaceBetween: 50,
			}
		}
	});
});
