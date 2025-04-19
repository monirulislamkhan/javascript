'use strict';
const form = document.getElementById('myForm');
const errorMgs = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (name === '' || email === '') {
    alert('Please fill the name and email');
  } else {
    alert('Thank you');
    console.log(name, email);
  }
});
