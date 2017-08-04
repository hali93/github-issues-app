var main = function() {
	$('.material-icons').click(function() {
		$(this).toggleClass('not_checked');
	})
};

	$('.filter').click(function() {
		$('.filter').removeClass('active');
		$(this).addClass('active');
	})

$(main);