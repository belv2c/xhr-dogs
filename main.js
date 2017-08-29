console.log("DOGS");

function executeThisCodeAfterFileLoads() {
	var data = JSON.parse(this.responseText);
	console.log("dogs", data.dogs);
}

function executeThisCodeAfterFileLoads2() {
	var data = JSON.parse(this.responseText);
	console.log("breeds", data.breeds);
}

function executeThisCodeIfFileErrors() {
	console.log("nope");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "dogs.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "breeds.json");
myRequest2.send();