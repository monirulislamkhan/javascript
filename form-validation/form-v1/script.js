'use strict';
const form = document.getElementById('myForm');
const errorMgs = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name === '' || email === '') {
    errorMgs.textContent = 'Please fill in all fields';
  } else {
    errorMgs.textContent = 'Thank You';
    errorMgs.style.color = 'green';
  }
});
