// Read-only variable "const keyword"
// const is "Read only keyword"
// It is constant value, which means that once a variable is assigned with const.
// It can't be reassigned.
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

// example
function printManyTimes(str){
	"use strict";
	const SENTENCE = str + " is cool!";
	for(let i=0;i<str.length;i+=2){
		console.log(SENTENCE);
	}
}
printManyTimes("Programming");
