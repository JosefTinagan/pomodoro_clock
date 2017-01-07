var id;

function test(){
	document.querySelector("#test").innerHTML = "oooop";
		elem = document.querySelector("#timer");
	length = elem.innerHTML.length / 2;
	x = elem.innerHTML.substring(0,length);
	y = elem.innerHTML.substring(length + 1);

	x = parseInt(x);
	y = parseInt(y);
	window.alert(x);
}

function increase_session(){
  var elem, num;
	elem = document.querySelector("#session_number");
 	num = parseInt(elem.innerHTML,10)
 	num = num + 1;
	document.querySelector("#session_number").innerHTML = num;
	 if(num < 10){
  		str = "0" + num + ":" + "00";
	 } else {
	  	str = num + ":" + "00";
	 }
	 document.querySelector("#timer").innerHTML = str;
}

function decrease_session(){
	var elem, num;
  elem = document.querySelector("#session_number");
  num = parseInt(elem.innerHTML,10);
  num = num - 1;
  document.querySelector("#session_number").innerHTML = num ;
  if(num < 10){
  		str = "0" + num + ":" + "00";
	 } else {
	  	str = num + ":" + "00";
	 }
	 document.querySelector("#timer").innerHTML = str;
}

function increase_break(){
	var elem, num;
  elem = document.querySelector("#break_number");
  num = parseInt(elem.innerHTML,10);
  num = num + 1;
  document.querySelector("#break_number").innerHTML = num;
}

function decrease_break(){
	var elem, num, str;
  elem = document.querySelector("#break_number");
  num = parseInt(elem.innerHTML,10);
  num = num - 1;
  document.querySelector("#break_number").innerHTML = num;

}

function restart_clock(){
	clearInterval(id);
	document.querySelector("#session_number").innerHTML = 25;
	document.querySelector("#timer").innerHTML = "25:00";
	document.querySelector("#break_number").innerHTML = 5;
}

function stop_clock(){
	clearInterval(id);
	session_number = document.querySelector("#session_number").innerHTML;
	document.querySelector("#timer").innerHTML =  session_number + ":00"
}

function pause_clock(){
	clearInterval(id);
}

function start_clock(){
	elem = document.querySelector("#timer");
	length = elem.innerHTML.length / 2;

	x = parseInt(document.querySelector("#session_number").innerHTML, 10);
	y = parseInt(elem.innerHTML.substring(length + 1),10);

	seconds = 60 * x;
	diff = y === 0 ? 0 : (60 - y);

	var minutes = seconds - diff;
		display = document.querySelector("#timer");

	startTimer(minutes, display);
}

function startTimer(duration, display) {
	var start = Date.now(),
		diff,
		minutes,
		seconds,
		check_break = false;

	function timer(){
		//get the number of seconds that have elapsed since
		//startTimer() was called

		diff = duration - (((Date.now() - start) / 1000) | 0);

		//does the same job as parseInt truncates the float
		minutes = (diff / 60) | 0;
		seconds = (diff % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.innerHTML = minutes + ":" + seconds;

		if (diff <= 0 && check_break == false){
			// add one second so that the count down starts at the full duration
			//example 05:00 not 4:59
			document.querySelector("#sesh").innerHTML = "Break";
			break_num = document.querySelector("#break_number").innerHTML;
			duration = parseInt(break_num) * 60;
			start = Date.now() + 1000;
			check_break = true;
		}
		else if(diff <= 0 && check_break == true){
			document.querySelector("#sesh").innerHTML = "Session";
			session_num = document.querySelector("#session_number").innerHTML;
			duration = parseInt(session_num) * 60;
			start = Date.now() + 1000;
			check_break = false;
		} 
	};
	// we don't want to wait a full second before the timer starts
	timer ();
	id = setInterval(timer, 1000);
}

