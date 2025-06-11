// Inspiration of contsructing a shopping cart comes from the following source:
// https://www.youtube.com/watch?v=YeFzkC2awTM

function renderCart() {

  // Read from localStorage and prase it from JSON to array
  // Defaut get an empty array[]
  // Refference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Get the body of table and clear its content
  const tbody = document.getElementById('cart-body');
  tbody.innerHTML = '';

  cart.forEach((item, index) => {

    // Creates td and inserts it into tr
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" class="car-img" /></td>
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td><button class="btn-contact">Contact Seller</button></td>
      <td><button class="btn-purchase">Purchase now</button></td>
      <td><button class="btn-remove" data-index="${index}">✕</button></td>
    `;

    // Append the row to the tbody
    tbody.appendChild(row);
  });
}

// Listen for clicks
document.addEventListener('click', function (e) {

  // If the click is on the remove button
  if (e.target.classList.contains('btn-remove')) {

    // Get the item's index and remove it by splice()
    const index = parseInt(e.target.dataset.index);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    // Refference: https://www.geeksforgeeks.org/javascript-array-splice-method/

    // Rerender
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
});

document.addEventListener('DOMContentLoaded', renderCart);
// Refference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener