// 02-arrays-and-objects/03-array-nesting-concat-spread/script.js
'use stict';
let x;

const fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
const vegetables = ['potato', 'tomato', 'onion', 'garlic', 'ginger'];

fruits.push(vegetables);
// x = fruits[5][1]

const allFruits = [fruits, vegetables];
x = allFruits.flat();

const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
// arr.sort((a,b) => b - a);
arr.reverse();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2.splice(1)];

console.log(arr3);

console.log(arr);

console.log(x);
