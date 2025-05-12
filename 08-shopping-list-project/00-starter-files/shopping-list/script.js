const form = document.getElementById('item-form');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function whenSubmit(e) {
  e.preventDefault();
  // console.log('submit working');
  const newItem = inputItem.value;
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  // Create button
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  // Create icon
  const iTag = document.createElement('i');
  iTag.className = 'fa-solid fa-xmark';

  // Append i tag to button
  button.appendChild(iTag);

  // Append button to li
  li.appendChild(button);

  // Append li to ul
  itemList.appendChild(li);

  // Clear input
  inputItem.value = '';
}

function removeItem(e) {
  console.log(e);
}

form.addEventListener('submit', whenSubmit);
itemList.addEventListener('click', removeItem);
