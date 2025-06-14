document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      description: button.dataset.description,
      price: button.dataset.price,
      image: button.dataset.image
    };

    // Read cart from localStorage or initialize it as an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const exists = cart.some(item => item.id === product.id);

    // If the product does not exist, add it to the cart
    if (!exists) {
      cart.push(product);

      // Refferebce: https://www.w3schools.com/js/js_json_stringify.asp
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.getElementById('cart-added').classList.remove('hidden');
  });
});


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        document.getElementById('cart-added').classList.remove('hidden');
    }

    if (e.target.classList.contains('close')) {
        document.getElementById('cart-added').classList.add('hidden');
    }

    if (e.target.classList.contains('button-cart')) {
        document.getElementById('cart-added').classList.add('hidden');
    }

    if (e.target.classList.contains('flags')) {
        document.getElementById('hidden-menus').classList.remove('hidden');
    }

    if (e.target.classList.contains('menu-close')) {
        document.getElementById('hidden-menus').classList.add('hidden');
    }
});

