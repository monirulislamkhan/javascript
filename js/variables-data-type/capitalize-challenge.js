'use strict';
const myString = 'developer';
// const myNewString = myString.substring(0, 1).toUpperCase() + myString.substring(1);
const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myNewString);
