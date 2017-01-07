function test(){
	document.querySelector("#test").innerHTML = "oooop";
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

function start_timer(){
	elem = document.querySelector("#timer");
	num = parseInt(elem.innerHTML,10);
	
}