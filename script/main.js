function up() {
	if($(window).scrollTop() < 110) {
		$('#up').fadeOut();
	}
	else {
		$('#up').fadeIn();
	}
};

function nav() {
	if($(this).scrollTop() > 20) {
		$('#nav').addClass('scroll');
	}
	else {
		$('#nav').removeClass('scroll');
	}
};

function check() {
	$('div[id^="section"]').each(function() {
		var topEdge = $(this).offset().top - 100,
				bottomEdge = topEdge + $('.section > h1').height() + 100,
				wScroll = $(window).scrollTop();

		if(topEdge <= wScroll && bottomEdge >= wScroll) {
			var currentId = $(this).attr('id'),
					reqLink = $('#nav > ul > li').filter('[data-id=' + currentId + ']');
			$('#nav > ul > li').removeClass('active');
			reqLink.addClass('active');
			$('#underscore').css({
				left: reqLink.position().left,
				opacity: '1'
			});
		}
	});
};

$(document).ready(function() {
	$(window).scroll(function() {
		check();
		nav();
		up();
	});
	$(window).resize(function() {
		check();
	});
	$('a[id="up"]').click(function() {
		$('body').animate({scrollTop: 0}, 500);
		$('html').animate({scrollTop: 0}, 500);
	});
	$('a[href^="#section"]').click(function() {
		event.preventDefault();
		var el = $(this).attr('href');
		
		if($(window).scrollTop() > 20) {
			$('body, html').animate({scrollTop: $(el).offset().top - 40}, 500);
		}
		else {
			$('body, html').animate({scrollTop: $(el).offset().top - 90}, 500);
		}
	});
}); //--> END ready