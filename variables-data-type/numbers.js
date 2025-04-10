'use strict';
let x;
const num = new Number(5);

// toString() - returns a sting representation of the number
x = num.toString();

// To get the length;
x = Number(num).toString().length;
// toFixed() - returns a string representation of the number in fixed-point notation
x = num.toFixed(2);
x = num.toPrecision(3);
x = num.toExponential(2);
x = num.valueOf();

// x = num.

console.log(x, typeof x);
