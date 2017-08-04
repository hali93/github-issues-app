var main = function() {
	$('.material-icons').click(function() {
		$(this).toggleClass('unchecked');
	})
};

	$('.filter').click(function() {
		$('.filter').removeClass('active');
		$(this).addClass('active');
	})

$(main);