console.log("DOGS");

function executeThisCodeAfterFileLoads() {
	var dogsData = JSON.parse(this.responseText).dogs;
/*	console.log("dogs", dogsData);*/
	getBreedz(dogsData);
}	


function executeThisCodeIfFileErrors() {
	console.log("nope");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "dogs.json");
myRequest.send();

function getBreedz(dogz){
	/*console.log("dogs array inside getBreedz", dogz);*/
	var myRequest2 = new XMLHttpRequest();
	myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
	myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
	myRequest2.open("GET", "breeds.json");
	myRequest2.send();

	function executeThisCodeAfterFileLoads2() {
		var breedsData = JSON.parse(this.responseText).breeds;
		/*console.log("breeds", breedsData);
		console.log("dogs next to breeds", dogz);*/
		combinedArray(dogz, breedsData);
	}
}

function combinedArray (dogsArray, breedsArray){
	/*console.log("dogsArray", dogsArray);
	console.log("breedsArray", breedsArray);*/
	// loop through dogs and look at breed_id
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"];
		/*console.log("dog breed_id", currentBreedId);*/
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
			/*console.log("one breed", breed);*/
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
		    dog["description"] = breed.description;
		    dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
		    }
		});
		
	});
	// loop through breeds and find matching breed_id
	// make final price
	console.log("all the dogs", dogsArray);
	domString(dogsArray);
}

function domString(dogs){
	// usual stuff - fat for loop
	var reallyLongDomString = "";
	writeToDom(reallyLongDomString);
}

function writeToDom(strang){
	// put in the DOM;

}