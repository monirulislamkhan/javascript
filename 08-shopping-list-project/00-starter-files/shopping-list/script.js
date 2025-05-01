const form = document.getElementById('item-form');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function whenSubmit(e) {
  e.preventDefault();
  console.log('submit working');
}

form.addEventListener('submit', whenSubmit);
