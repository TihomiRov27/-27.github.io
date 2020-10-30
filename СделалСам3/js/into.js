/*burger
====================*/

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu__active');

		if (menu.hasClass('burger-menu__active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');

/*up
====================*/

$(document).ready(function() {
	$(function () {
		$("#back-top").hide();

		$(window).scroll(function () {
		    if ($(this).scrollTop() > 250) {
		        $("#back-top").fadeIn();
		    } else {
		        $("#back-top").fadeOut();
		    }
		});

		$("#back-top").click(function () {
		    $("body,html").animate( {
		        scrollTop:0
		}, 800);
		return false;
		}); 
	});
});



