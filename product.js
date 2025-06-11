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
      alert('Product added');
    } else {
      alert('Product already in cart');
    }
  });
});
