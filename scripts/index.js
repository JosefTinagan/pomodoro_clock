function test(){
	document.querySelector("#test").innerHTML = "oooop";
}

function increase_session(){
  var elem, num;
	elem = document.querySelector("#session_number");
 	num = parseInt(elem.innerHTML,10)
	document.querySelector("#session_number").innerHTML = num + 1;
}

function decrease_session(){
	var elem, num;
  elem = document.querySelector("#session_number");
  num = parseInt(elem.innerHTML,10);
  document.querySelector("#session_number").innerHTML = num - 1;
}

function increase_break(){
	var elem, num;
  elem = document.querySelector("#break_number");
  num = parseInt(elem.innerHTML,10);
  document.querySelector("#break_number").innerHTML = num + 1;
}

function decrease_break(){
	var elem, num;
  elem = document.querySelector("#break_number");
  num = parseInt(elem.innerHTML,10);
  document.querySelector("#break_number").innerHTML = num - 1;
}


