$(window).on('scroll', function () {
	if ($(this).scrollTop() > 0) {
	    if (!$('nav').hasClass('h-14 shadow-sm')) {
	        $('nav').addClass('h-14 shadow-sm');
	    }
	} else {
	    if ($('nav').hasClass('h-14 shadow-sm')) {
	        $('nav').removeClass('h-14 shadow-sm');
	    }
	}
});

$(document).keydown(function() {
  if(event.keyCode == 191) {
     $('#search').focus();
     return false;
  }
});

$("input").focus(
	function () {
		$(this).addClass('px-8');
	}
);

$("input").focusout(
	function () {
		$(this).removeClass('px-8');
	}
);

$("textarea").focus(
	function () {
		$(this).addClass('importanthui');
	}
);

$("textarea").focusout(
	function () {
		$(this).removeClass('importanthui');
	}
);