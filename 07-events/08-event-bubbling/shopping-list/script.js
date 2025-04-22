const form = document.getElementById('item-form');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // alert('hi');
  // console.log(e.target);
  const newItem = inputItem.value;
  if (newItem === '') {
    alert('Please set any items');
    return;
  }
  // console.log(newItem);

  const li = document.createElement('li');

  // li

  const createButton = document.createElement('button');
  createButton.className = 'remove-item btn-link text-red';
  console.log(li);
});
