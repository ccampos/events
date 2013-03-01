$('body').bind('click', function(ev, evData) {
	console.log('bind', arguments, this);
});

$('body').trigger('click', {id: 0});