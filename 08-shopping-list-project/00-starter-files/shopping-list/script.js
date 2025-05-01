'use strict';
const form = document.getElementById('item-form');
const inputValue = document.getElementById('item-input');
const listItem = document.getElementById('item-list');

const whenSubmit = (e) => {
  e.preventDefault();
  const item = inputValue.value;

  if (item === '') {
    // alert('Please fill Item');
    return;
  }

  // List item created
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  const iTag = (document.createElement('i').className = 'fa-solid fa-xmark');

  button.appendChild(iTag);
  li.appendChild(button);

  listItem.appendChild(li);
  console.log(li);
};

form.addEventListener('submit', whenSubmit);

/* // Method Old with garbage data
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const item = inputValue.value;
  item === '' ? alert('Please fill all fields') : console.log('Item added successfull');

  const li = document.createElement('li');

  li.innerHTML = `
   ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  listItem.appendChild(li);
}); */
