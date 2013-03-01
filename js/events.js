var log = function() {
	console.log('loglog');
};

// click
$('input[type=button]').one('click', log);

// $('input[type=button]').trigger('click');


// unbind
$('input[type=button]').unbind('click', log);

$('input[type=button]').trigger('click');