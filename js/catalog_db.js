database = {
	girlandaio: {
		name: "Доменико Гирландайо",
		lifetime: "2 июня 1448 — 11 января 1494.",
		bio: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат \
		Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. \
		Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей \
		(в их роли выступают знатные граждане Флоренции в костюмах того времени).",
		desktopImage: "img/catalog/girlandaio-desktop.jpg",
		tabletImage: "img/catalog/girlandaio-tablet.jpg",
		mobileImage: "img/catalog/girlandaio-mobile.jpg"
	},
	monet: {
		name: "Клод Моне",
		lifetime: "14 ноября 1840 — 5 декабря 1926.",
		bio: "Оскар Клод Моне — французский живописец, один из основателей импрессионизма. Оскар Клод Моне родился 14 ноября 1840 года в Париже. \
		Он был вторым ребёнком бакалейщика Клода Адольфа Моне и Луизы Жюстины (урождённой Обре). Когда мальчику было пять лет, семья \
		переехала в Нормандию, в Гавр. Отец хотел, чтобы Клод стал бакалейщиком и продолжил семейное дело. Юность Моне, как он сам отмечал впоследствии, \
		по существу, была юностью бродяги. Он проводил больше времени в воде и на скалах, чем в классе. Школа ему, по натуре недисциплинированному, \
		всегда казалась тюрьмой. Он развлекался, разрисовывая голубые обложки тетрадей, и использовал их для портретов своих учителей, сделанных в \
		весьма непочтительной, карикатурной манере, и в этой забаве вскоре достиг совершенства. В пятнадцать лет Моне был известен всему Гавру как карикатурист.",
		desktopImage: "img/catalog/monet-desktop.jpg",
		tabletImage: "img/catalog/monet-tablet.jpg",
		mobileImage: "img/catalog/monet-mobile.jpg"
	},
	manet: {
		name: "Эдуард Мане",
		lifetime: "23 января 1832 — 30 апреля 1883.",
		bio: "Эдуард Мане — французский живописец, гравёр, один из родоначальников импрессионизма. Эдуард Мане родился в доме 5 по улице Бонапарта \
		в парижском квартале Сен-Жермен-де-Пре в семье Огюста Мане, главы департамента Министерства юстиции, и Эжени-Дезире Фурнье, дочери французского \
		дипломата, бывшего консулом в Гётеборге. Шведский король Карл XIII был крёстным отцом матери Мане. В 1839 году Мане отдан на обучение в пансион \
		аббата Пуалу, затем по причине абсолютного равнодушия к учёбе был переведён отцом «на полный пансион» в колле́ж Роллена (фр.), где и обучался в \
		период с 1844 по 1848 год, также не проявляя никаких успехов.",
		desktopImage: "img/catalog/manet-desktop.jpg",
		tabletImage: "img/catalog/manet-tablet.jpg",
		mobileImage: "img/catalog/manet-mobile.jpg"
	}
}

function changeArtist(artistId) {
	$('.artist-details').fadeOut(300, function() {
		artist = database[artistId];
		$(".artist-details__heading").text(artist.name);
		$(".artist-details__subtext").text(artist.lifetime);
		$(".artist-details__text").text(artist.bio);
		$('.artist-details__picture > source[media="(min-width: 1650px)"]').attr('srcset', artist.desktopImage);
		$('.artist-details__picture > source[media="(min-width: 768px)"]').attr('srcset', artist.tabletImage);
		$('.artist-details__img').attr('src', artist.mobileImage);
		$('.artist-details').fadeIn(300);
	});
}

$(function() {
	$(".artists-catalog__link").on("click", function() {
		artist_id = $(this).attr('id');
		changeArtist(artist_id);
	});
	$(".flags__button_france").on("click", function() {
		changeArtist('monet');
	});
	$(".flags__button_italy").on("click", function() {
		changeArtist('girlandaio');
	});
});
