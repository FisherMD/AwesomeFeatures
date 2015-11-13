function up() {
	if($(window).scrollTop() < 30) {
		$('#up').fadeOut();
	}
	else {
		$('#up').fadeIn();
	}
};

function nav() {
	if($(this).scrollTop() > 30) {
		$('#nav').removeClass('default');
		$('#nav').addClass('scroll');
	}
	else {
		$('#nav').removeClass('scroll');
		$('#nav').addClass('default');
	}
};

function check() {
	$('div[id^="section"]').each(function() {
		var topEdge = $(this).offset().top,
				bottomEdge = topEdge + $(this).height(),
				wScroll = $(window).scrollTop() + 100;

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
	$('#underscore').css('left', $('#link1').position().left);
	check();
	$('a[id="up"]').click(function(event) {
		$('body').animate({scrollTop: 0}, 500);
		$('html').animate({scrollTop: 0}, 500);
		return false;
	});
	$('a[href^="#section"]').click(function(event) {
		event.preventDefault();
		var el = $(this).attr('href');
		
		if($(window).scrollTop() < 40) {
			$('body').animate({scrollTop: $(el).offset().top + 20}, 500);
		}
		else {
			$('body').animate({scrollTop: $(el).offset().top + 70}, 500);
		}
		/* ----------- */
		if($(window).scrollTop() < 40) {
			$('html').animate({scrollTop: $(el).offset().top + 20}, 500);
		}
		else {
			$('html').animate({scrollTop: $(el).offset().top + 70}, 500);
		}

		return false;
	});
	$(window).scroll(function(event) {
		check();
		nav();
		up();
	});
	$(window).resize(function(event) {
		check();
	});
}); //--> END ready