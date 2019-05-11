// compare scopes of the var and let keywords

// example
var printNumTwo;
for(var i = 0;i<3;i++){
	if(i === 2){
		printNumTwo = function(){
			return i;
		};
	}
}
consolelog(printNumTwo());
// result : 3
// This is because the value assigned to i was updated

// let example
'use strict';
let printNumTwo;
for(let i = 0;i<3;i++){
	if(i===2){
		printNumTwo = function(){
			return i;
		};
	}
}
console.log(printNumTow());
// result : 2
consolt.log(i);
// result : 'i is not defined'

function checkScope(){
	"use strict";
	let i = "function scope";
	if(true){
		let i = "block scope";
		console.log("Block scope i is : ",i);
	}
	console.log("Function scope i is : ", i);
	return i;
}

checkScope();
