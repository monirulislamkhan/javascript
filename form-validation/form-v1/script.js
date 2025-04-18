'use strict';
const form = document.getElementById('myForm');
const errorMgs = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  console.log(name);
});
