
var clock = document.getElementById('clock');
var hex_color = document.getElementById('hex_color');

function hex_clock() {
	var time = new Date();
	var hours = (time.getHours()%12).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	var clock_string = hours + ' : ' + minutes + ' : ' + seconds;
	var hex_color_string = '#' + hours + minutes + seconds;

	clock.textContent = clock_string;
	hex_color.textContent = hex_color_string;

	document.body.style.backgroundColor = hex_color_string;

}
hex_clock();

setInterval(hex_clock, 1000);
