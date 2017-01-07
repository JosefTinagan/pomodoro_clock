
function test(){
	timer = new Date();
	timer.setMinutes(45);
	timer = timer.getMinutes();
	document.getElementById("test").innerHTML = "BOOMMMMM" + timer;
}

function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

function beginTimer(){
	var fiveMinutes = 60 * 5,
		display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
}

/*
window.onload = function() {
	var fiveMinutes = 60 * 5,
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);

};

/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
*/