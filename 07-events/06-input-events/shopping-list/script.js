const form = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
console.log(itemList);

function onSubmit(e) {
  e.preventDefault();
  const itemIput = document.getElementById('item-input').value;
  const slectDropdown = document.getElementById('priority-input').value;
  const ischeckboxChecked = document.getElementById('checkbox').checked;
  const formData = {
    item: itemIput,
    priority: slectDropdown,
    isChecked: ischeckboxChecked,
  };
  console.log(formData);

  const itemHtml = `
  <li>
          ${formData.item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
  `;

  // itemList.appendChild(itemHtml);
  document.getElementById('item-list').appendChild(itemHtml);
  // console.log(itemList);
}

// Form Submit
form.addEventListener('submit', onSubmit);

// Data floating
