'use strict';
var button = $('#track');
var reset = $('#reset')
var count = 0;

function likes() {
	count ++;
	if (count === 1) {
	$(button).html(count + " like");
	} else {
		$(button).html(count + " likes");
	}
}

function nocount() {
	count = 0;
	$(button).html(count + ' likes');
}

$(button).click(likes);
$(reset).click(nocount);