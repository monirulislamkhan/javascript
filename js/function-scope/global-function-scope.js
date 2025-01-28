'use strict';

const x = 10;

function test() {
  const x = 19;
  console.log(window.innerHeight);
}

test();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 10;
  return x + y;
}

console.log(add());

console.log(y);
console.log(x);
