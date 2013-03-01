var log = function() {
	console.log('loglog');
};

// click
$('input[type=button]').bind('click', log);

$('input[type=button]').trigger('click');


// unbind
$('input[type=button]').unbind('click', log);