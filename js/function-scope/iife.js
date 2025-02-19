'use strict';
// IIFE stands for Immediately Invoked Function Expression, which means that it is a self calling anonymous function. It is invoked immediately after its declaration.
const user = 'Monirul';
console.log(user);

(function () {
  const user = 'Monirul';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
})();
