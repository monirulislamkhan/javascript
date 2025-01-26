'use strict';
let x, y;
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const string = ['Monirul', 'Rubina', 'Mubasshir', 'Mohasina', 'Meherin', 'Musharraf'];
x = number;
y = number;
number.push(11);
number.unshift(0);
number.pop();
number.shift();
// x = number.reverse();
// x = number.sort((a, b) => b - a);
// y = string.reverse();
// y = string.sort();
x = number.includes(5);
y = y.__proto__;
x = number.indexOf(2);

// x = number;

console.log(x);
if (Boolean(y)) {
  console.log(y);
}
