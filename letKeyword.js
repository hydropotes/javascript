/* Explore Differences between the var and let keywords */

// var keyword have the problem.
// we can overwrite variable declarations without an error.
var camper = 'James';
var camper = 'David';
console.log(camper);
// we expect 'James' but result is 'David'

// let keyword solve this issue
// when using let, a variable with the same name can only be declared once
let camper = 'James';
let camper = 'Davide';// throws an error

// use strict : enables Strict Mode
// catches common coding mistakes and "unsafe" action
"use strict";
x = 3.14; // throws an error because x is not declared.
